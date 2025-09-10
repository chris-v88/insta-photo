import { authService } from '../services/auth.service';
import { responseSuccess } from '../common/helpers/response.helpers';

export const authController = {
  register: async (req, res, next) => {
    const result = await authService.register(req);
    const response = responseSuccess(result, `Register successfully`);
    res.status(response.statusCode).json(response);
  },

  login: async (req, res, next) => {
    const result = await authService.register(req);
    const response = responseSuccess(result, `Login successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await authService.remove(req);
    const response = responseSuccess(result, `Remove auth #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};