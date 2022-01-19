import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { cartActions } from "./store/cart";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.cart.visible);
  const notification = useSelector((state) => state.cart.notification);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending ...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://react-http-udemy-course-default-rtdb.firebaseio.com/cartState.json",
        {
          method: "POST",
          body: JSON.stringify({
            items: cartItems,
          }),
        }
      );

      if (!response.ok) {
        dispatch(
          cartActions.showNotification({
            status: "error",
            title: "Error",
            message: "Error sending cart data!",
          })
        );
        return;
      }

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error sending cart data!",
        })
      );
    });
  }, [cartItems, dispatch]);

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
