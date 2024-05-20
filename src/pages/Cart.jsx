"use client";
import Breadcumb from "../components/shared/Breadcumb";
import Button from "../components/ui/Button";
import { useCartStore } from "../store";

const Cart = () => {
  const { cart, updateQuantity } = useCartStore();

  const cartElements = [];

  if (cart?.totalQty) {
    console.log("working");
    for (let product of Object.values(cart?.items)) {
      cartElements.push(
        <tr>
          <td className="py-6 border-b">
            <img
              src={product?.item?.image}
              alt="product"
              className="w-24 rounded-md"
            />
          </td>
          <td className="py-6 font-medium border-b">{product?.item?.title}</td>
          <td className="py-6 border-b">${product?.item?.price}</td>
          <td className="py-6 border-b">
            <div className="bg-[#EDEEF1] p-1 rounded-full flex items-center gap-2 w-fit">
              <button
                className="w-6 h-6 rounded-full transition-all hover:bg-white flex items-center justify-center"
                onClick={() => updateQuantity(product?.item?.id, 1)}
              >
                -
              </button>
              <input
                className="w-5 text-center bg-transparent outline-none"
                type="text"
                value={product?.qty}
                name=""
                id=""
              />
              <button
                className="w-6 h-6 rounded-full transition-all hover:bg-white flex items-center justify-center"
                onClick={() => updateQuantity(product?.item?.id, 1, true)}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-6 border-b">
            ${Number(product?.item?.price) * Number(product?.qty)}
          </td>
        </tr>
      );
    }
  }
  return (
    <main>
      <Breadcumb title="Cart" pathnames={["Home", "Cart"]} />

      <section className="py-24">
        <div className="container flex flex-col md:flex-row justify-between gap-12">
          <div className="w-full">
            <div className="overflow-auto">
              <table className="md:w-full w-[700px] text-base text-black">
                <thead className="border-b">
                  <tr>
                    <th className="font-medium pb-6 text-left">Product</th>
                    <th className="font-medium pb-6 text-left">Name</th>
                    <th className="font-medium pb-6 text-left">Price</th>
                    <th className="font-medium pb-6 text-left">Quantity</th>
                    <th className="font-medium pb-6 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>{cartElements}</tbody>
              </table>

              {cart?.totalQty === 0 && (
                <p className="mt-3">No Cart Items Found!!</p>
              )}
            </div>
          </div>

          <div className="w-full md:min-w-[400px] md:max-w-[400px] xl:min-w-[500px] p-9 border-4 rounded-3xl bg-white">
            <h2 className="text-[28px] leading-[28px] mb-4 font-semibold">
              Cart totals
            </h2>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Subtotal</span>
              <span>${cart?.totalPrice}</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Shipping: Arlene </span>
              <span className="text-[15px]">Flat rate: $10.00</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5">
              <span>Total</span>
              <span className="font-semibold text-[28px] text-primary">
                ${Number(cart?.totalPrice) + 10}
              </span>
            </div>
            <div className="mt-5">
              <Button href="/checkout" className="w-full block text-center">
                Process to checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
