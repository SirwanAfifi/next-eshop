import { query } from "../../../db";

export default async (req, res) => {
  const orders = await query("SELECT * FROM orders");
  res.send(orders);
};
