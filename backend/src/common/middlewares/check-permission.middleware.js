import prisma from '../prisma/init.prisma';

import { BadRequestException } from '../helpers/exception.helper';

export const checkPermission = async (req, res, next) => {
  // user
  const user = req?.user;
  if (!user) {
    throw new BadRequestException('User not found');
  }

  // admin role gets access
  if (user.roleId === 1) {
    next();
    return;
  }

  // method
  const method = req.method;

  // endpoint
  // /api/auth
  const endpoint = req.baseUrl + req.route?.path;

  // const permission = await prisma.Permissions.findFirst({
  //   where: {
  //     method: method,
  //     endpoint: endpoint
  //   }
  // });

  const rolePermission = await prisma.rolePermission.findFirst({
    where: {
      roleId: user.roleId,
      // permissionId: permission.id, // tham khảo
      Permissions: {
        method: method,
        endpoint: endpoint,
      },
      isActive: true,
    },
  });

  if (!rolePermission) {
  throw new BadRequestException('❌ You do not have permission to access this resource');
  }

  // console.log('📌 Check Permission :', { user, method, endpoint, rolePermission });

  next();
};
