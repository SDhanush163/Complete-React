import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../store/uiSlice";

const CartButton = () => {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
