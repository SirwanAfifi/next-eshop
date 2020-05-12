import { query } from "../../../db";

export default async (req, res) => {
  const { productId } = req.query;
  const products = await query(
    `SELECT * FROM products WHERE product_id = ${productId}`
  );
  res.statusCode = 200;
  res.json(products);
};
