import prisma from "../common/prisma/init.prisma";

export const postService = {
  create: async (req) => {
    return `This action create`;
  },

  findAll: async (req) => {
    const posts = await prisma.posts.findMany();
    return posts;
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