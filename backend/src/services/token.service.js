import jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_KEY,
  ACCESS_REFRESH_SECRET,
  ACCESS_REFRESH_EXPIRES_IN,
} from '../common/constants/app.constant';
import { BadResquestException } from '../common/helpers/exception.helper';

export const tokenService = {
  createTokens: (userId) => {
    const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_KEY, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });

    const refreshToken = jwt.sign({ userId }, ACCESS_REFRESH_SECRET, {
      expiresIn: ACCESS_REFRESH_EXPIRES_IN,
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken: (accessToken, options = {}) => {
    try {
      return jwt.verify(accessToken, ACCESS_TOKEN_KEY, options);
    } catch (err) {
      console.error(err);
      throw new BadResquestException('Token đã hết hạn hoặc không hợp lệ');
    }
  },

  verifyRefreshToken: (refreshToken, options = {}) => {
    try {
      return jwt.verify(refreshToken, ACCESS_REFRESH_SECRET, options);
    } catch (err) {
      console.error(err);
      throw new BadResquestException('Token đã hết hạn hoặc không hợp lệ');
    }
  },
};
