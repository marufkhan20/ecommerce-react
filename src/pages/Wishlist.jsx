import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Wishlist = () => {
  return (
    <main>
      <div className="flex items-center border bg-white">
        <div className="px-4">
          <MdOutlineClose className="transition-all hover:text-red-600 cursor-pointer" />
        </div>
        <div className="flex items-center border-r w-full">
          <div className="p-3 border-r">
            <img
              src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/business-card-600x600.png"
              alt=""
              className="w-20"
            />
          </div>

          <div className="p-3 flex flex-col gap-1">
            <Link
              className="font-semibold text-black hover:text-primary"
              to="#"
            >
              Business card
            </Link>
            <span>$5.95 – $39.95</span>
            <span>April 18, 2024</span>
          </div>
        </div>
        <div className="w-full p-3">
          <Button className="py-2 px-5">Add to cart</Button>
        </div>
      </div>
      <div className="flex items-center border bg-white">
        <div className="px-4">
          <MdOutlineClose className="transition-all hover:text-red-600 cursor-pointer" />
        </div>
        <div className="flex items-center border-r w-full">
          <div className="p-3 border-r">
            <img
              src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/business-card-600x600.png"
              alt=""
              className="w-20"
            />
          </div>

          <div className="p-3 flex flex-col gap-1">
            <Link
              className="font-semibold text-black hover:text-primary"
              href="#"
            >
              Business card
            </Link>
            <span>$5.95 – $39.95</span>
            <span>April 18, 2024</span>
          </div>
        </div>
        <div className="w-full p-3">
          <Button className="py-2 px-5">Add to cart</Button>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
