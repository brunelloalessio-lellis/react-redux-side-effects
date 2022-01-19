import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  let cartItemList = <p>No items inside cart.</p>;

  if (cartItems.length > 0) {
    cartItemList = cartItems.map((cartItem) => {
      return <CartItem key={cartItem.id} item={cartItem} />;
    });
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemList}</ul>
    </Card>
  );
};

export default Cart;
