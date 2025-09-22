import prisma from "../common/prisma/init.prisma";
import cloudinary from "../common/cloudinary/init.cloudinary.js";

export const postService = {
  create: async (req) => {
    const { description } = req.body;
    const user = req.user; // From protect middleware
    
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }
    
    if (!req.file) {
      throw new Error('Image file is required');
    }

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          folder: 'insta-photo/posts',
          transformation: [
            { width: 1080, height: 1080, crop: 'limit' },
            { quality: 'auto' }
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(req.file.buffer);
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
          }
        },
      }
    });
    
    return newPost;
  },

  findAll: async (req) => {
    let { page, limit } = req.query;

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
          }
        },
      }
    });

    const totalPosts = await prisma.posts.count();
    const totalPages = Math.ceil(totalPosts / limit);
    
    return {
      page: page,
      limit: limit,
      totalPages: totalPages,
      totalPosts: totalPosts,
      data: paginatedPosts || [],
    };
  },

  findOne: async (req) => {
    return `This action returns a id: ${req.params.id} post`;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} post`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} post`;
  },
};