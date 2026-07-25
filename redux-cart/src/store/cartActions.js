import { replaceCart } from "./cartSlice";
import { showNotification } from "./uiSlice";

/* ===============================================================================
FIREBASE REALTIME DATABASE SETUP (TESTING MODE)
==================================================================================

1. Go to:
   https://console.firebase.google.com/

2. Create a new Firebase Project
   - Click "Create a Project"
   - Enter a project name
   - Complete the project setup

3. Enable Realtime Database
   - In the left sidebar, go to:
       Build → Realtime Database
   - Click "Create Database"

4. Choose the Database Location
   - Select the region closest to you
   - Click "Next"

5. Select Security Rules
   - Choose "Start in TEST MODE"
   - Click "Enable"

6. Copy the Database URL
   It will look similar to:

   https://your-project-id-default-rtdb.firebaseio.com

7. Replace <backend_url> in this file with your database URL.

   Example:

   fetch("https://your-project-id-default-rtdb.firebaseio.com/cart.json")

   Note:
   - Do NOT include a trailing slash in <backend_url>.
   - Always end Firebase requests with ".json".

8. Run the application.
   Firebase will automatically create the "cart" node the first
   time data is sent using the PUT request.

9. Before deploying your application,
   change the database rules from TEST MODE to secure rules.

=============================================================================== */

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
