import { query } from "../../../db";

export default async (req, res) => {
  const { productId } = req.query;
  const pattern = /^\d+$/;
  let products;
  if (pattern.test(productId)) {
    products = await query(
      `SELECT * FROM products WHERE product_id = ${productId}`
    );
  } else {
    products = await query(
      `SELECT * FROM products WHERE name LIKE '%${productId.replace(
        /-/g,
        " "
      )}%'`
    );
  }
  res.statusCode = 200;
  res.json(products);
};
