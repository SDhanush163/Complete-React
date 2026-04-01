import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

/* --------------------------------------------------------
Cart Modal component - Dialog box to showcase the Cart . 
    Simple dialog wrapper for the cart
-------------------------------------------------------- */

const CartModal = forwardRef(({ title, actions }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
