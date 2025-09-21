import prisma from "../common/prisma/init.prisma";

export const postService = {
  create: async (req) => {
    return `This action create`;
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