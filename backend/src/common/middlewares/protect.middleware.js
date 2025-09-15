import { tokenService } from '../../services/token.service';
import { UnauthorizedException } from '../helpers/exception.helper';
import prisma from '../prisma/init.prisma';

export const protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization || `Bearer ${req.cookies.access_token}`;
    if (!authorization) throw new UnauthorizedException('Not authorized');

    // authorization.split(' ')[1];
    // tách chuỗi Bearer <token>
    const [type, accessToken] = authorization.split(' ');
    if (type !== 'Bearer' || !accessToken) throw new UnauthorizedException('Unauthorized');

    const { userId } = tokenService.verifyAccessToken(accessToken);
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new UnauthorizedException('User not found');
    
    req.user = user;

    // console.log('⚔️ Protect middleware', { authorization, type, accessToken, userId, user });

    next();
  } catch (err) {
    next(err);
  }
};
