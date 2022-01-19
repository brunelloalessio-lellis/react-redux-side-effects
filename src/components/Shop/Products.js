import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productList = useSelector((state) => state.products.productList);

  let listContent = <p>No items inside product list</p>;

  if (productList.length > 0) {
    listContent = productList.map((product) => {
      return (
        <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
          key={product.id}
        />
      );
    });
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {listContent}
      </ul>
    </section>
  );
};

export default Products;
