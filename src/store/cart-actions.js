import { cartActions } from "./cart";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending ...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-udemy-course-default-rtdb.firebaseio.com/cartState.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Loading error!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (e) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error sending cart data!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const loadCartData = async () => {
      try {
        dispatch(cartActions.loadingCart());

        const response = await fetch(
          "https://react-http-udemy-course-default-rtdb.firebaseio.com/cartState.json"
        );
        const json = await response.json();

        dispatch(cartActions.loadCartData(json));
      } catch (e) {
        throw new Error("Error loading produt list");
      }
    };

    try {
      await loadCartData();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data loaded successfully!",
        })
      );
    } catch (e) {
        dispatch(
          cartActions.showNotification({
            status: "error",
            title: "Error",
            message: "Error sending cart data!",
          })
        );
    }
  };
};
