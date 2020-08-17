"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class ScoreController {
    async index(req, res) {
        const trx = await connection_1.default.transaction();
        var teste = process.env.NODE_ENV;
        console.log(teste);
        try {
            const ranking = await connection_1.default('users').orderBy('score', 'desc').limit(10);
            await trx.commit();
            return res.json(ranking);
        }
        catch (err) {
            return res.status(400).json({
                error: "Erro inesperado ao buscar a pontuação",
            });
        }
    }
    async create(req, res) {
        const { email, name, score } = req.body;
        const trx = await connection_1.default.transaction();
        const exists = await connection_1.default("users").where("email", email);
        try {
            /** Verificando se o e-mail já existe */
            if (exists.length > 0) {
                const { id } = exists[0];
                const scoreBefore = exists[0].score;
                if (score > scoreBefore) {
                    await connection_1.default("users").update({ score }).where("id", id);
                }
                else {
                    return res.json({ message: `Você possui uma pontuação maior ou igual que ${score}, portanto ela não foi atualizada` });
                }
            }
            else {
                await trx("users").insert({
                    name,
                    email,
                    score,
                });
            }
            await trx.commit();
            return res.status(201).send();
        }
        catch (err) {
            await trx.rollback();
            // console.log(err);
            return res.status(400).json({
                error: "Erro inesperado ao salvar a pontuação",
            });
        }
    }
}
exports.default = ScoreController;
