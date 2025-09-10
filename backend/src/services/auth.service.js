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
    const { username, password } = req.body;
    const user = await prisma.users.findUnique({
        where: {
            username: username,
        }
    })
    if (!user) {
        throw new BadResquestException('Tài khoản không tồn tại');
    }
    if (!user.password) {
        throw new BadResquestException('Mat khẩu không tồn tại');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        throw new BadResquestException('Mật khẩu không đúng');
    }

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