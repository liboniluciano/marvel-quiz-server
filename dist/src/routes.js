"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ScoreController_1 = __importDefault(require("./controllers/ScoreController"));
const routes = express_1.default.Router();
const scoreController = new ScoreController_1.default();
routes.get('/score', scoreController.index);
routes.post('/score', scoreController.create);
exports.default = routes;
