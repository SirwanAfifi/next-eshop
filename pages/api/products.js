import { query } from "../../db";

export default async (req, res) => {
  const products = await query(`SELECT * FROM products`);
  res.statusCode = 200;
  res.json(products);
};
