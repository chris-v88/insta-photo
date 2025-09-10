import jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_SECRET,
  ACCESS_REFRESH_SECRET,
  ACCESS_REFRESH_EXPIRES_IN,
} from '../common/constants/app.constant';

export const tokenService = {
  createTokens: (userId) => {
    const accessToken;

    const refreshToken;

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken: (accessToken, option) => {
    const decodedAccessToken;
  },

  verifyRefreshToken: (refreshToken, option) => {
    const decodedRefreshToken;
  },
};
