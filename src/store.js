import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCartStore = create()(
  devtools((set) => ({
    cart: {
      items: {},
      totalQty: 0,
      totalPrice: 0,
    },
    addToCart: (product) =>
      set((cart) => {
        if (!cart?.items[product?.id]) {
          cart.items[product?.id] = {
            item: product,
            qty: 1,
          };
          cart.totalQty += 1;
          cart.totalPrice += Number(product?.price);
        } else {
          cart.items[product?.id].qty += 1;
          cart.totalQty += 1;
          cart.totalPrice += Number(product?.price);
        }
        // set in local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        return { cart };
      }),
    updateQuantity: (id, qty, plus) =>
      set((cart) => {
        if (plus) {
          cart.items[id].qty += qty;
          cart.totalQty += qty;
          cart.totalPrice += Number(cart?.items[id].item?.price);
        } else {
          cart.totalQty -= qty;
          cart.totalPrice -= Number(cart?.items[id].item?.price);
          if (cart.items[id].qty - 1 === 0) {
            delete cart.items[id];
          } else {
            cart.items[id].qty -= qty;
          }
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        return { cart };
      }),
  }))
);

export const useAuthStore = create()(
  devtools((set) => ({
    state: {
      token: undefined,
      user: undefined,
    },
    login: (data) =>
      set((state) => {
        state.token = data?.token;
        state.user = data?.user;

        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: data?.token,
            user: data?.user,
          })
        );

        return state;
      }),
    logout: () =>
      set((state) => {
        state.token = undefined;
        state.user = undefined;

        localStorage.removeItem("auth");

        return state;
      }),
  }))
);
