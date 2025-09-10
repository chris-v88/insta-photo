import * as bcrypt from "bcrypt";

import { BadResquestException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const authService = {
  register: async (req) => {
    const { full_name, username, email, password } = req.body;
    const isExistingUser = await prisma.users.findUnique({
        where: {
            email: email,
        }
    });
    if (isExistingUser) {
        throw new BadResquestException('Email đã được sử dụng, vui lòng chọn email khác');
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = await prisma.users.create({
        data: {
            full_name,
            username,
            email,
            password: passwordHash,
        }
    });
    return newUser;
  },

  login: async (req) => {
    return `This action logs in a auth`;
  },

  findAll: async (req) => {
    return `This action returns all auth`;
  },

  findOne: async (req) => {
    return `This action returns a id: ${req.params.id} auth`;
  },

  update: async (req) => {
    return `This action updates a id: ${req.params.id} auth`;
  },

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} auth`;
  },
};