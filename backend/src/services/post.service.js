import prisma from '../common/prisma/init.prisma';
import cloudinary from '../common/cloudinary/init.cloudinary.js';
import jwt from 'jsonwebtoken';
import { BadRequestException, UnauthorizedException } from '../common/helpers/exception.helper';

export const postService = {
  create: async (req) => {
    const { description } = req.body;
    const user = req.user;

    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }

    if (!req.file) {
      throw new Error('Image file is required');
    }

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'image',
            folder: 'insta-photo/posts',
            transformation: [{ width: 1080, height: 1080, crop: 'limit' }, { quality: 'auto' }],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(req.file.buffer);
    });

    // Create post in database
    const newPost = await prisma.posts.create({
      data: {
        user_id: user.id,
        description: description || '',
        image_url: uploadResult.secure_url,
      },
      include: {
        Users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    return newPost;
  },

  findAll: async (req) => {
    let { page, limit } = req.query;

    // kiểm tra có token k --> có nghĩa là có user đăng nhập r
    const token = req.headers.authorization?.replace('Bearer ', '');
    let currentUser = null;
    
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
        const user = await prisma.users.findUnique({
          where: { id: decoded.userId },
          select: { id: true }
        });
        if (user) currentUser = user;
      } catch (error) {
        // khỏi log eror tại vì k cần đăng nhập vẫn có thể xem được bài
      }
    }

    // get list of posts from database
    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : 10;

    const offset = (page - 1) * limit;
    const paginatedPosts = await prisma.posts.findMany({
      skip: offset,
      take: limit,
      include: {
        Users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            Post_Likes: true,
            Comments: true,
          },
        },
        Post_Likes: currentUser ? {
          where: {
            user_id: currentUser.id,
          },
          select: {
            user_id: true,
          },
        } : false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    const totalPosts = await prisma.posts.count();
    const totalPages = Math.ceil(totalPosts / limit);

    // thêm vô để có thông tin sô lượng like và comment 
    const transformedPosts = paginatedPosts.map((post) => ({
      ...post,
      likes_count: post._count.Post_Likes,
      comments_count: post._count.Comments,
      isLikedByCurrentUser: currentUser ? post.Post_Likes.length > 0 : false,
    }));

    return {
      page: page,
      limit: limit,
      totalPages: totalPages,
      totalPosts: totalPosts,
      data: transformedPosts || [],
    };
  },

  findOne: async (req) => {
    const postId = parseInt(req.params.id);
    
    if (!postId) {
      throw new BadRequestException('Post ID is required');
    }

    // kiểm tra có token k --> có nghĩa là có user đăng nhập r
    const token = req.headers.authorization?.replace('Bearer ', '');
    let currentUser = null;
    
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
        const user = await prisma.users.findUnique({
          where: { id: decoded.userId },
          select: { id: true }
        });
        if (user) currentUser = user;
      } catch (error) {
        // khỏi log eror tại vì k cần đăng nhập vẫn có thể xem được bài
      }
    }

    // Get post with user info, counts, and comments
    const post = await prisma.posts.findUnique({
      where: { id: postId },
      include: {
        Users: {
          select: {
            id: true,
            username: true,
            avatar: true,
            full_name: true,
          },
        },
        _count: {
          select: {
            Post_Likes: true,
            Comments: true,
          },
        },
        Post_Likes: currentUser ? {
          where: {
            user_id: currentUser.id,
          },
          select: {
            user_id: true,
          },
        } : false,
        Comments: {
          include: {
            Users: {
              select: {
                id: true,
                username: true,
                avatar: true,
                full_name: true,
              },
            },
          },
          orderBy: {
            created_at: 'desc',
          },
        },
      },
    });

    if (!post) {
      throw new BadRequestException('Post not found');
    }

    // api này cần thông tin người comment
    const transformedPost = {
      ...post,
      likes_count: post._count.Post_Likes,
      comments_count: post._count.Comments,
      isLikedByCurrentUser: currentUser ? post.Post_Likes.length > 0 : false,
      Comments: post.Comments.map(comment => ({
        id: comment.id,
        content: comment.content,
        created_at: comment.created_at,
        updated_at: comment.updated_at,
        user: {
          id: comment.Users.id,
          username: comment.Users.username,
          avatar: comment.Users.avatar,
          fullName: comment.Users.full_name,
        },
      })),
    };

    return transformedPost;
  },

  addComment: async (req) => {
    const user = req.user;
    const postId = parseInt(req.params.id);
    const { content } = req.body;

    if (!user || !user.id) throw new UnauthorizedException('User not authenticated');
    if (!postId) throw new BadRequestException('Post ID is required');
    if (!content || !content.trim()) throw new BadRequestException('Comment content is required');

    // Check if post exists
    const post = await prisma.posts.findUnique({ where: { id: postId } });
    if (!post) throw new BadRequestException('Post not found');

    // Create comment
    const newComment = await prisma.comments.create({
      data: {
        post_id: postId,
        user_id: user.id,
        content: content.trim(),
      },
      include: {
        Users: {
          select: {
            id: true,
            username: true,
            avatar: true,
            full_name: true,
          },
        },
      },
    });

    return {
      id: newComment.id,
      content: newComment.content,
      created_at: newComment.created_at,
      updated_at: newComment.updated_at,
      user: {
        id: newComment.Users.id,
        username: newComment.Users.username,
        avatar: newComment.Users.avatar,
        fullName: newComment.Users.full_name,
      },
    };
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} post`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} post`;
  },

  toggleLike: async (req) => {
    const user = req.user;
    const postId = parseInt(req.params.id);

    let message;
    let isLiked;

    if (!user || !user.id) throw new UnauthorizedException('User not authenticated');
    if (!postId) throw new BadRequestException('Post ID is required');

    // Check if post exists
    const post = await prisma.posts.findUnique({ where: { id: postId } });
    if (!post) throw new BadRequestException('Post not found');

    // Check if user already liked the post
    const alreadyLiked = await prisma.Post_Likes.findUnique({
      where: {
        post_id_user_id: {
          post_id: postId,
          user_id: user.id,
        },
      },
    });

    if (alreadyLiked) {
      await prisma.Post_Likes.delete({
        where: {
          post_id_user_id: {
            post_id: postId,
            user_id: user.id,
          },
        },
      });
      message = 'Post unliked successfully';
      isLiked = false;
    } else {
      await prisma.Post_Likes.create({
        data: {
          post_id: postId,
          user_id: user.id,
        },
      });
      message = 'Post liked successfully';
      isLiked = true;
    }

    const updatedPost = await prisma.posts.findUnique({
      where: { id: postId },
      include: {
        Users: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            Post_Likes: true,
            Comments: true,
          },
        },
      },
    });

    return {
      message,
      isLiked,
      post: {
        ...updatedPost,
        likes_count: updatedPost._count.Post_Likes,
        comments_count: updatedPost._count.Comments,
        isLikedByCurrentUser: isLiked,
      },
    };
  },
};
