import { replaceCart } from "./cartSlice";
import { showNotification } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("<backend_url>/cart.json");

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          items: cartData.items || [],
          ...cartData,
        }),
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Oops!",
          message: `${error}`,
        }),
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      }),
    );

    const sendRequest = async () => {
      const response = await fetch("<backend_url>/cart.json", {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart Data successfully!",
        }),
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Oops!",
          message: `${error}`,
        }),
      );
    }
  };
};
