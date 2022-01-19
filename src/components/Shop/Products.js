import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { loadProductList } from '../../store/products-actions';

const Products = (props) => {
  const productList = useSelector((state) => state.products.productList);
  const loadingList = useSelector((state) => state.products.loadingList);
  const listLoaded = useSelector((state) => state.products.listLoaded);
  const dispatch = useDispatch();

  let listContent = <p>No items inside product list</p>;

  useEffect(()=>{
    if (!loadingList && !listLoaded) {
      dispatch(loadProductList())
    }
  }, [loadingList, listLoaded, dispatch]);

  if (loadingList && !listLoaded) {
    listContent = <p>Loading item list ...</p>;
  } else if (!loadingList && listLoaded) {
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
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{listContent}</ul>
    </section>
  );
};

export default Products;
