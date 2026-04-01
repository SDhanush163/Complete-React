import { useContext, useRef } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/cartContext.jsx";

/* --------------------------------------------------------
Header component - The name of the website and the cart 
    button are present here.

  - context > items used
  - modal > ref to connect to the Dialog box to open it
  - cartQuantity > Show the number of items in the cart
  - modalActions > Button depending on the Cart quantity for 
        the Cart dialog. If there are no items, show only the
        Close button. If there are items, show Checkout also.

  - handleOpenCartClick > passthrough for opening the cart

-------------------------------------------------------- */

const Header = () => {
  const { items } = useContext(CartContext);
  const modal = useRef();
  const cartQuantity = items.length;
  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  const handleOpenCartClick = () => modal.current.open();

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
