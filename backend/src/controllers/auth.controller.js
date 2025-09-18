import { authService } from '../services/auth.service';
import { responseSuccess } from '../common/helpers/response.helpers';

export const authController = {
  register: async (req, res, next) => {
    const result = await authService.register(req);
    const response = responseSuccess(result, `Register successfully`);
    res.status(response.statusCode).json(response);
  },

  login: async (req, res, next) => {
    const result = await authService.login(req, res);
    const response = responseSuccess(result, `Login successfully`);
    res.status(response.statusCode).json(response);
  },

  logout: async (req, res, next) => {
    const result = await authService.logout(req, res);
    const response = responseSuccess(result, `Logged out successfully`);
    res.status(response.statusCode).json(response);
  },

  authCheck: async (req, res, next) => {
    const result = await authService.authCheck(req, res);
    const response = responseSuccess(result, `Auth check successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await authService.remove(req);
    const response = responseSuccess(result, `Remove auth #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};
