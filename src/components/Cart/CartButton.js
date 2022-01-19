import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onMyCartClickHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  let counter = 0;

  cartItems.forEach((element) => {
    counter += element.quantity;
  });

  return (
    <button className={classes.button} onClick={onMyCartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
