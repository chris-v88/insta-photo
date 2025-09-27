import { postService } from '../services/post.service';
import { responseSuccess } from '../common/helpers/response.helpers';

export const postController = {
  create: async (req, res, next) => {
    const result = await postService.create(req);
    const response = responseSuccess(result, `Create post successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async (req, res, next) => {
    const result = await postService.findAll(req);
    const response = responseSuccess(result, `Get all posts successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async (req, res, next) => {
    const result = await postService.findOne(req);
    const response = responseSuccess(result, `Get post #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async (req, res, next) => {
    const result = await postService.update(req);
    const response = responseSuccess(result, `Update post #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await postService.remove(req);
    const response = responseSuccess(result, `Remove post #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  toggleLike: async (req, res, next) => {
    const result = await postService.toggleLike(req);
    const response = responseSuccess(result, result.message);
    res.status(response.statusCode).json(response);
  },

  addComment: async (req, res, next) => {
    const result = await postService.addComment(req);
    const response = responseSuccess(result, 'Comment added successfully');
    res.status(response.statusCode).json(response);
  },
};