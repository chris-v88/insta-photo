import * as bcrypt from 'bcrypt';

import { BadRequestException, UnauthorizedException } from '../common/helpers/exception.helper';
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
      throw new BadRequestException('Email is already in use, please choose another email');
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
      throw new BadRequestException('Account does not exist');
    }
    if (!user.password) {
      throw new BadRequestException('Password does not exist');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Incorrect password');
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
    if (!accessToken || !refreshToken) throw new UnauthorizedException('Token has expired or is invalid');

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
      throw new UnauthorizedException('Token has expired or is invalid');
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

  remove: async (req) => {
    return `This action removes a id: ${req.params.id} auth`;
  },
};
