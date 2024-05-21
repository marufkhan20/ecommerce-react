import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
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
      <Breadcumb title="Cart Page" pathnames={["Home", "Cart"]} />

      <section className="py-[70px]">
        <div className="container flex flex-col md:flex-row justify-between gap-5">
          <div className="w-full">
            <div className="overflow-auto">
              <table className="md:w-full w-[700px] text-base text-black">
                <thead className="border-b-2">
                  <tr>
                    <th className="font-medium text-[15px] text-heading pb-4 text-left">
                      Product
                    </th>
                    <th className="font-medium text-[15px] text-heading pb-4 text-left">
                      Price
                    </th>
                    <th className="font-medium text-[15px] text-heading pb-4 text-left">
                      Quantity
                    </th>
                    <th className="font-medium text-[15px] text-heading pb-4 text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 border-b flex items-center gap-3">
                      <img
                        src="/images/products/1.jpg"
                        className="w-14"
                        alt=""
                      />
                      <Link
                        to="#"
                        className="text-sm text-body transition-all hover:text-primary"
                      >
                        Crunchy Triangle Chips Snacks
                      </Link>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <div className="w-20 py-1 px-3 border border-border rounded flex items-center justify-between gap-1">
                        <input type="text" className="w-full" value={2} />
                        <div className="flex flex-col">
                          <IoIosArrowUp className="text-xs cursor-pointer" />
                          <IoIosArrowDown className="text-xs cursor-pointer" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <RiDeleteBin6Line className="cursor-pointer text-body text-xl" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b flex items-center gap-3">
                      <img
                        src="/images/products/1.jpg"
                        className="w-14"
                        alt=""
                      />
                      <Link
                        to="#"
                        className="text-sm text-body transition-all hover:text-primary"
                      >
                        Crunchy Triangle Chips Snacks
                      </Link>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <div className="w-20 py-1 px-3 border border-border rounded flex items-center justify-between gap-1">
                        <input type="text" className="w-full" value={2} />
                        <div className="flex flex-col">
                          <IoIosArrowUp className="text-xs cursor-pointer" />
                          <IoIosArrowDown className="text-xs cursor-pointer" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <RiDeleteBin6Line className="cursor-pointer text-body text-xl" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b flex items-center gap-3">
                      <img
                        src="/images/products/1.jpg"
                        className="w-14"
                        alt=""
                      />
                      <Link
                        to="#"
                        className="text-sm text-body transition-all hover:text-primary"
                      >
                        Crunchy Triangle Chips Snacks
                      </Link>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <div className="w-20 py-1 px-3 border border-border rounded flex items-center justify-between gap-1">
                        <input type="text" className="w-full" value={2} />
                        <div className="flex flex-col">
                          <IoIosArrowUp className="text-xs cursor-pointer" />
                          <IoIosArrowDown className="text-xs cursor-pointer" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      $56.00
                    </td>
                    <td className="py-4 text-[15px] font-medium text-heading border-b">
                      <RiDeleteBin6Line className="cursor-pointer text-body text-xl" />
                    </td>
                  </tr>
                  {/* {cartElements} */}
                </tbody>
              </table>

              {/* {cart?.totalQty === 0 && (
                <p className="mt-3">No Cart Items Found!!</p>
              )} */}
            </div>
          </div>

          <div className="w-full md:min-w-[400px] md:max-w-[400px] xl:min-w-[500px] py-[10px] px-4 border border-border rounded h-fit bg-white">
            <h2 className="text-xl leading-[24px] mb-4 font-semibold text-heading border-b border-border pb-4">
              Summary
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black">
                <span className="text-sm text-heading">Subtotal</span>
                <span className="text-sm font-medium text-heading">
                  {/* ${cart?.totalPrice} */}
                  $30.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black">
                <span className="text-sm text-heading">Delivery Charges</span>
                <span className="text-sm font-medium text-heading">$10.00</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black">
                <span className="text-sm text-heading">Coupon Discount</span>
                <span className="text-sm font-medium text-primary cursor-pointer">
                  Apply Coupan
                </span>
              </div>
            </div>

            <div className="my-3 border flex items-center justify-between gap-4 border-border rounded-md">
              <input
                type="text"
                placeholder="Enter Your Coupan Code"
                className="px-4 py-3 w-full outline-none text-sm text-body"
              />
              <Button className="py-3 px-5 text-sm my-1 mr-5">Apply</Button>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-border pt-3 flex-wrap text-lg text-black">
              <span className="text-base font-medium text-heading">
                Total Amount
              </span>
              <span className="text-base font-medium text-heading">
                ${Number(cart?.totalPrice) + 10}
              </span>
            </div>

            <div className="mt-5">
              <Button href="/checkout" className="w-full block text-center">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
