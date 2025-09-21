import { userService } from '../services/user.service';
import { responseSuccess } from '../common/helpers/response.helpers';
import { BadResquestException, UnauthorizedException } from '../common/helpers/exception.helper';

export const userController = {

  uploadAvatar: async (req, res, next) => {
    if (!req.file) {
      throw new BadResquestException('No file uploaded');
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

  updateProfile: async (req, res, next) => {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('User not authenticated');
    }
    const result = await userService.updateProfile(req.user.id, req.body);
    const response = responseSuccess(result, 'Profile updated successfully');
    res.status(response.statusCode).json(response);
  }

  // create: async (req, res, next) => {
  //   const result = await userService.create(req);
  //   const response = responseSuccess(result, `Create user successfully`);
  //   res.status(response.statusCode).json(response);
  // },

  // findAll: async (req, res, next) => {
  //   const result = await userService.findAll(req);
  //   const response = responseSuccess(result, `Get all users successfully`);
  //   res.status(response.statusCode).json(response);
  // },

  // findOne: async (req, res, next) => {
  //   const result = await userService.findOne(req);
  //   const response = responseSuccess(result, `Get user #${req.params.id} successfully`);
  //   res.status(response.statusCode).json(response);
  // },

  // update: async (req, res, next) => {
  //   const result = await userService.update(req);
  //   const response = responseSuccess(result, `Update user #${req.params.id} successfully`);
  //   res.status(response.statusCode).json(response);
  // },

  // remove: async (req, res, next) => {
  //   const result = await userService.remove(req);
  //   const response = responseSuccess(result, `Remove user #${req.params.id} successfully`);
  //   res.status(response.statusCode).json(response);
  // },
};