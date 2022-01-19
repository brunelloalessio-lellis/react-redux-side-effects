import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { isLoading, isLoaded } = useSelector((state) => state.cart);

  const onMyCartClickHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  let counter = 0;

  cartItems.forEach((element) => {
    counter += element.quantity;
  });

  if (isLoading && !isLoaded) {
    return <div>Loading cart ...</div>;
  }

  return (
    <button className={classes.button} onClick={onMyCartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
