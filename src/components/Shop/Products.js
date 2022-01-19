import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { productsActions } from "../../store/products";

const Products = (props) => {
  const productList = useSelector((state) => state.products.productList);
  const loadingList = useSelector((state) => state.products.loadingList);
  const listLoaded = useSelector((state) => state.products.listLoaded);
  const dispatch = useDispatch();

  let listContent = <p>No items inside product list</p>;

  useEffect(()=>{
    const loadProductList = async () => {
      if (!loadingList && !listLoaded) {
        try {
          dispatch(productsActions.loadingList());
  
          const response = await fetch(
            "https://react-http-udemy-course-default-rtdb.firebaseio.com/products.json"
          );
          const json = await response.json();
  
          let list = [];
  
          for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
              const element = json[key];
              list.push({
                id: key,
                ...element,
              });
            }
          }
          dispatch(productsActions.loadList(list));
        } catch (e) {
          console.error("error loading list");
        }
      }
    }

    loadProductList()
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
