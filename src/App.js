import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.cart.visible);
  const notification = useSelector((state) => state.cart.notification);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { isLoading, isLoaded } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  useEffect(() => {
    if (!isLoading && !isLoaded) {
      isInitial = true;
      dispatch(fetchCartData());
    }
  }, [isLoading, isLoaded, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
