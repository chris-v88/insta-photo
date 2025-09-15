export const postService = {
  create: async (req) => {
    return `This action create`;
  },

  findAll: async (req) => {
    return `This action returns all post`;
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