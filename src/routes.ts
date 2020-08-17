import express from 'express';


const routes = express.Router();

routes.get('/ping', (req, res) => {
  console.log(process.env.DB_DATABASE);
  return res.json({ message: 'hehe' });
})

export default routes;