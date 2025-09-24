import { BadRequestException } from '../common/helpers/exception.helper';
import prisma from '../common/prisma/init.prisma';
import cloudinary from '../common/cloudinary/init.cloudinary';
import jwt from 'jsonwebtoken';

export const userService = {
  uploadAvatar: async (userId, file) => {
    console.log('🚀 ~ file:', file);
    console.log('🚀 ~ userId:', userId);
    
    // 1. Get user from DB
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // 2. Upload new image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'insta-photo/avatars' },
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        },
      );
      uploadStream.end(file.buffer);
    });

    // 3. Delete old avatar from Cloudinary if exists
    if (user.avatar) {
      await cloudinary.uploader.destroy(user.avatar);
    }

    // 4. Update user in database
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        avatar: result.secure_url,
      },
    });

    return { user_id: userId, avatar: updatedUser.avatar };
  },

  getProfile: async (userId) => {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        full_name: true,
        avatar: true,
        bio: true,
        is_admin: true,
        followers_count: true,
        following_count: true,
        created_at: true,
        updated_at: true,
        Posts: {
          select: {
            id: true,
            description: true,
            image_url: true,
            created_at: true,
            _count: {
              select: {
                Post_Likes: true,
                Comments: true,
              },
            },
          },
          orderBy: {
            created_at: 'desc',
          },
        },
        _count: {
          select: {
            Posts: true,
            Follows_Follows_follower_idToUsers: true,
            Follows_Follows_following_idToUsers: true,
          },
        },
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      fullName: user.full_name,
      avatar: user.avatar,
      bio: user.bio,
      isAdmin: user.is_admin,
      followersCount: user.followers_count || user._count.Follows_Follows_following_idToUsers,
      followingCount: user.following_count || user._count.Follows_Follows_follower_idToUsers,
      postsCount: user._count.Posts,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      posts: user.Posts.map(post => ({
        id: post.id,
        description: post.description,
        imageUrl: post.image_url,
        likesCount: post._count.Post_Likes,
        commentsCount: post._count.Comments,
        createdAt: post.created_at,
        isLikedByCurrentUser: false, // Always false for public access
      })),
    };
  },

  getProfileByUsername: async (username, req = null) => {
    // Check if user is authenticated by looking for Authorization header
    let currentUser = null;
    if (req) {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (token) {
        try {

          const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
          const user = await prisma.users.findUnique({
            where: { id: decoded.userId },
            select: { id: true }
          });
          if (user) currentUser = user;
        } catch (error) {
          // Invalid token, continue as anonymous user
        }
      }
    }

    const user = await prisma.users.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        full_name: true,
        avatar: true,
        bio: true,
        followers_count: true,
        following_count: true,
        created_at: true,
        Posts: {
          select: {
            id: true,
            description: true,
            image_url: true,
            created_at: true,
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
        },
        _count: {
          select: {
            Posts: true,
            Follows_Follows_follower_idToUsers: true,
            Follows_Follows_following_idToUsers: true,
          },
        },
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      avatar: user.avatar,
      bio: user.bio,
      followersCount: user.followers_count || user._count.Follows_Follows_following_idToUsers,
      followingCount: user.following_count || user._count.Follows_Follows_follower_idToUsers,
      postsCount: user._count.Posts,
      createdAt: user.created_at,
      posts: user.Posts.map(post => ({
        id: post.id,
        description: post.description,
        imageUrl: post.image_url,
        likesCount: post._count.Post_Likes,
        commentsCount: post._count.Comments,
        createdAt: post.created_at,
        isLikedByCurrentUser: currentUser ? post.Post_Likes.length > 0 : false,
      })),
    };
  },

  updateProfile: async (userId, profileData) => {
    const { fullName, bio, username } = profileData;

    // Check if username is already taken by another user
    if (username) {
      const existingUser = await prisma.users.findFirst({
        where: {
          username,
          NOT: { id: userId },
        },
      });
      if (existingUser) {
        throw new BadRequestException('Username is already taken');
      }
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        ...(fullName && { full_name: fullName }),
        ...(bio !== undefined && { bio }),
        ...(username && { username }),
        updated_at: new Date(),
      },
      select: {
        id: true,
        email: true,
        username: true,
        full_name: true,
        avatar: true,
        bio: true,
        is_admin: true,
        followers_count: true,
        following_count: true,
        created_at: true,
        updated_at: true,
        _count: {
          select: {
            Posts: true,
          },
        },
      },
    });

    return {
      id: updatedUser.id,
      email: updatedUser.email,
      username: updatedUser.username,
      fullName: updatedUser.full_name,
      avatar: updatedUser.avatar,
      bio: updatedUser.bio,
      isAdmin: updatedUser.is_admin,
      followersCount: updatedUser.followers_count,
      followingCount: updatedUser.following_count,
      postsCount: updatedUser._count.Posts,
      createdAt: updatedUser.created_at,
      updatedAt: updatedUser.updated_at,
    };
  },

  //   create: async (req) => {
  //     return `This action create`;
  //   },

  //   findAll: async (req) => {
  //     return `This action returns all user`;
  //   },

  //   findOne: async (req) => {
  //     return `This action returns a id: ${req.params.id} user`;
  //   },

  //   update: async (req) => {
  //     return `This action updates a id: ${req.params.id} user`;
  //   },

  //   remove: async (req) => {
  //     return `This action removes a id: ${req.params.id} user`;
  //   },
};
