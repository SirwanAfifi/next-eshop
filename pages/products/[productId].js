import fetch from "node-fetch";

const Products = ({ product }) => {
  return <h1>{JSON.stringify(product)}</h1>;
};

Products.getInitialProps = async (context) => {
  const { productId } = context.query;
  const data = await fetch(`http://localhost:3000/api/products/${productId}`);
  const product = await data.json();
  return { product };
};

export default Products;
