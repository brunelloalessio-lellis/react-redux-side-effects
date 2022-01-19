import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;
  const dispatch = useDispatch();

  const onPlusClick = () => {
    dispatch(
      cartActions.addItem({
        title,
        price,
        id,
      })
    );
  };

  const onMinusClick = () => {
    dispatch(
      cartActions.removeItem({
        title,
        price,
        id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onMinusClick}>-</button>
          <button onClick={onPlusClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
