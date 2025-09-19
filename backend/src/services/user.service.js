import { BadResquestException } from '../common/helpers/exception.helper';
import prisma from '../common/prisma/init.prisma';
import cloudinary from '../common/cloudinary/init.cloudinary';

export const userService = {
  uploadAvatar: async (userId, file) => {
    console.log('🚀 ~ file:', file);
    console.log('🚀 ~ userId:', userId);
    
    // 1. Get user from DB
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new BadResquestException('User not found');
    }

    const byteArrayBuffer = file.buffer;
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'insta-photo/avatars' },
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        },
      );
      uploadStream.end(byteArrayBuffer);
    });

    if (user.avatar) {
      await cloudinary.uploader.destroy(user.avatar);
    }

    const upadateUser = await prisma.users.update({
      where: { id: userId },
      data: {
        avatar: result.secure_url,
      },
    });

    return { user_id: userId, avatar: updatedUser.avatar };
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
