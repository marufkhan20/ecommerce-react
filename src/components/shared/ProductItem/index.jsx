import { useState } from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ViewProductImages from "./ViewProductImages";

const ProductItem = ({ product }) => {
  const { id, price, title, primary_image: image, variations } = product || {};

  const [viewImages, setViewImages] = useState(false);
  return (
    <>
      <Link
        to="#"
        className="border product-item border-border rounded relative"
      >
        <div className="overflow-hidden">
          <img
            src="/images/products/1.jpg"
            className="transition-all duration-500 hover:scale-125"
            alt=""
          />
        </div>

        <div className="p-4">
          <span className="text-[13px] text-[#999999]">Fashion</span>
          <p className="text-[#4B5966] transition-all mb-3 mt-1 hover:text-primary text-base">
            {"Men's"} Stylish Printed Shirt
          </p>
          <div className="flex items-center text-sm gap-[2px] mb-2">
            <FaStar color="#F6A454" />
            <FaStar color="#F6A454" />
            <FaStar color="#F6A454" />
            <FaStar color="#F6A454" />
            <FaStar color="#A4A4A4" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-[#4b5966]">$59.00</span>
            <span className="line-through text-body">$89.00</span>
          </div>
        </div>

        <div className="product-item-opt opacity-0 invisible translate-y-2 transition-all duration-300 absolute top-5 right-5 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <FaRegStar />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white"
            onClick={() => setViewImages(true)}
          >
            <FaRegEye />
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <TfiReload />
          </div>
        </div>
      </Link>

      <div className="bg-white hidden p-5 rounded-3xl transition-all product-item relative">
        <div className="pb-5">
          <Link to={`/products/${id}`}>
            <img
              className="rounded-3xl w-full h-full"
              src={image}
              alt="product"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link to="/products/single-product">
            <h5 className="transition-all hover:text-primary">{title}</h5>
          </Link>
          <h4 className="text-lg font-semibold">${price}</h4>
          <div className="mt-7 w-full">
            <Link to={`/products/${id}`}>
              <Button className="w-full" variant="dark">
                View Product
              </Button>
            </Link>
          </div>
        </div>

        <div className="product-item-opt opacity-0 invisible translate-y-2 transition-all duration-300 absolute top-5 right-8 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <FaRegStar />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white"
            onClick={() => setViewImages(true)}
          >
            <FaRegEye />
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <TfiReload />
          </div>
        </div>
      </div>

      {/* view product images */}
      <ViewProductImages
        viewImages={viewImages}
        setViewImages={setViewImages}
        images={variations || []}
      />
    </>
  );
};

export default ProductItem;
