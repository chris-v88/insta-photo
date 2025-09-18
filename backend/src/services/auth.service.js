import * as bcrypt from 'bcrypt';

import { BadResquestException, UnauthorizedException } from '../common/helpers/exception.helper';
import prisma from '../common/prisma/init.prisma';
import { tokenService } from './token.service';
import { convertTimeToMilliseconds } from '../common/utils/convertors';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_REFRESH_EXPIRES_IN,
} from '../common/constants/app.constant';

export const authService = {
  register: async (req) => {
    const { full_name, username, email, password } = req.body;
    const isExistingUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
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
      },
    });
    return newUser;
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw new BadResquestException('Tài khoản không tồn tại');
    }
    if (!user.password) {
      throw new BadResquestException('Mật khẩu không tồn tại');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new BadResquestException('Mật khẩu không đúng');
    }

    const tokens = tokenService.createTokens(user.id);

    // set cookies
    res.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      maxAge: convertTimeToMilliseconds(ACCESS_TOKEN_EXPIRES_IN),
      sameSite: 'lax', // 'lax' for development
      secure: process.env.NODE_ENV === 'production',
    });
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      maxAge: convertTimeToMilliseconds(ACCESS_REFRESH_EXPIRES_IN),
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return {
      user,
    };
  },

  authCheck: async (req, res) => {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;
    if (!accessToken || !refreshToken) throw new UnauthorizedException('Token đã hết hạn hoặc không hợp lệ');

    try {
      const decodedAccessToken = tokenService.verifyAccessToken(accessToken, {
        ignoreExpiration: true,
      });
      const decodedRefreshToken = tokenService.verifyRefreshToken(refreshToken);
      if (decodedAccessToken.userId !== decodedRefreshToken.userId)
        throw new UnauthorizedException('Token Invalid');

      const user = await prisma.users.findUnique({ where: { id: decodedRefreshToken.userId } });
      if (!user) throw new UnauthorizedException('Token Invalid');

      return { isAuthenticated: true, user };
    } catch (err) {
      throw new UnauthorizedException('Token đã hết hạn hoặc không hợp lệ');
    }
  },

  logout: async (req, res) => {
    // Clear cookies
    res.clearCookie('access_token', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    res.clearCookie('refresh_token', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    
    return { message: 'Logged out successfully' };
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
