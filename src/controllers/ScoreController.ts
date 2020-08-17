import { Request, Response } from "express";

import db from "../database/connection";

export default class ScoreController {
  async create(req: Request, res: Response) {
    const { email, name, score } = req.body;
    const trx = await db.transaction();

    const exists = await db("users").where("email", email);

    try {
      const { id } = exists[0];

      if (exists.length > 0) {
        /** Verificando se o e-mail já existe */
        await db("users").update({ score }).where("id", id);

      } else {
        await trx("users").insert({
          name,
          email,
          score,
        });
      }

      await trx.commit();
      return res.status(201).send();

    } catch (err) {
      await trx.rollback();
      return res.status(400).json({
        error: "Erro inesperado ao salvar a pontuação",
      });
    }
  }
}
