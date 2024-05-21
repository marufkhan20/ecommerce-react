import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Cart = ({ openCart, setOpenCart }) => {
  return (
    <>
      <div
        className={`inset-0 w-full transition-all duration-700 ${
          !openCart ? "opacity-0 invisible" : "opacity-100 visible"
        } h-full bg-black/85 absolute z-40`}
        onClick={() => setOpenCart(false)}
      />
      <div
        className={`absolute transition-all duration-500 top-0 ${
          openCart ? "right-0" : "-right-[100%]"
        } bottom-0 h-full bg-white z-50 w-[360px] px-5 py-4 flex flex-col gap-6`}
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-heading text-[15px] font-semibold">My Cart</p>
          <IoMdClose
            className="text-lg cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="p-3 border border-border rounded-md flex items-center gap-3">
            <div className="w-20">
              <img src="/images/products/1.jpg" alt="" />
            </div>
            <div className="flex justify-between gap-3 flex-1">
              <div className="flex flex-col gap-1">
                <Link
                  to="#"
                  className="text-[15px] transition-all hover:text-primary"
                >
                  New T-Shirt
                </Link>
                <span className="flex items-center gap-2">
                  <span className="text-base font-semibold text-body">
                    $25.00
                  </span>
                  <span>x</span>
                  <span>1 Item</span>
                </span>
                <div className="w-20 p-1 border border-border flex items-center gap-1 justify-between">
                  <span className="cursor-pointer text-lg">-</span>
                  <input
                    type="text"
                    value={1}
                    className="outline-none w-full text-center"
                  />
                  <span className="cursor-pointer text-lg">+</span>
                </div>
              </div>
              <IoClose className="text-red-600 cursor-pointer text-base" />
            </div>
          </div>
          <div className="p-3 border border-border rounded-md flex items-center gap-3">
            <div className="w-20">
              <img src="/images/products/1.jpg" alt="" />
            </div>
            <div className="flex justify-between gap-3 flex-1">
              <div className="flex flex-col gap-1">
                <Link
                  to="#"
                  className="text-[15px] transition-all hover:text-primary"
                >
                  New T-Shirt
                </Link>
                <span className="flex items-center gap-2">
                  <span className="text-base font-semibold text-body">
                    $25.00
                  </span>
                  <span>x</span>
                  <span>1 Item</span>
                </span>
                <div className="w-20 p-1 border border-border flex items-center gap-1 justify-between">
                  <span className="cursor-pointer text-lg">-</span>
                  <input
                    type="text"
                    value={1}
                    className="outline-none w-full text-center"
                  />
                  <span className="cursor-pointer text-lg">+</span>
                </div>
              </div>
              <IoClose className="text-red-600 cursor-pointer text-base" />
            </div>
          </div>
          <div className="p-3 border border-border rounded-md flex items-center gap-3">
            <div className="w-20">
              <img src="/images/products/1.jpg" alt="" />
            </div>
            <div className="flex justify-between gap-3 flex-1">
              <div className="flex flex-col gap-1">
                <Link
                  to="#"
                  className="text-[15px] transition-all hover:text-primary"
                >
                  New T-Shirt
                </Link>
                <span className="flex items-center gap-2">
                  <span className="text-base font-semibold text-body">
                    $25.00
                  </span>
                  <span>x</span>
                  <span>1 Item</span>
                </span>
                <div className="w-20 p-1 border border-border flex items-center gap-1 justify-between">
                  <span className="cursor-pointer text-lg">-</span>
                  <input
                    type="text"
                    value={1}
                    className="outline-none w-full text-center"
                  />
                  <span className="cursor-pointer text-lg">+</span>
                </div>
              </div>
              <IoClose className="text-red-600 cursor-pointer text-base" />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm text-body font-medium">Sub-Total: </span>
              <span className="text-sm font-semibold text-heading">
                $300.00
              </span>
            </li>
            <li className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm text-body font-medium">
                VAT (20%) :{" "}
              </span>
              <span className="text-sm font-semibold text-heading">$60.00</span>
            </li>
            <li className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm text-body font-medium">Total :</span>
              <span className="text-sm font-semibold text-heading">
                $360.00
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-3">
            <Button variant="light-dark" href="/cart" className="w-full py-3">
              VIEW CART
            </Button>
            <Button className="w-full py-3">CHECKOUT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
