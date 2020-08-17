import express from 'express';

import ScoreController from './controllers/ScoreController';

const routes = express.Router();
const scoreController = new ScoreController();

routes.post('/score', scoreController.create);

export default routes;