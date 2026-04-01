import { useContext } from "react";
import { CartContext } from "../store/cartContext";

/* --------------------------------------------------------
Cart component - The cart of added items. If no items, show
  'No items in cart!' and if there are items, add each to a
  list and show the quantities selected and the total value
  of the cart. Each item has an updte quantity div where the 
  user can add or remove 1 item of the type.

  - context > items and updateItemQuantity used
  - totalPrice > go through the selected items and quantities
      and return the sum price of the objects

-------------------------------------------------------- */

const Cart = () => {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{totalPrice}</strong>
      </p>
    </div>
  );
};

export default Cart;
