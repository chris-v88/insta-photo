import { userService } from '../services/user.service';
import { responseSuccess } from '../common/helpers/response.helpers';
import { BadRequestException, UnauthorizedException } from '../common/helpers/exception.helper';

export const userController = {

  uploadAvatar: async (req, res, next) => {
    if (!req.file) {
      throw new BadRequestException('No file uploaded');
    }
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('User not authenticated');
    }
    const result = await userService.uploadAvatar(req.user.id, req.file);
    const response = responseSuccess(result, 'Avatar uploaded successfully');
    res.status(response.statusCode).json(response);
  },

  getProfile: async (req, res, next) => {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('User not authenticated');
    }
    const result = await userService.getProfile(req.user.id);
    const response = responseSuccess(result, 'Profile fetched successfully');
    res.status(response.statusCode).json(response);
  },

  getProfileByUsername: async (req, res, next) => {
    const { username } = req.params;
    const result = await userService.getProfileByUsername(username, req);
    const response = responseSuccess(result, 'User profile fetched successfully');
    res.status(response.statusCode).json(response);
  },

  updateProfile: async (req, res, next) => {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('User not authenticated');
    }
    const result = await userService.updateProfile(req.user.id, req.body);
    const response = responseSuccess(result, 'Profile updated successfully');
    res.status(response.statusCode).json(response);
  },
};