"use client";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { API_BASE_URL } from "../../../config";
import { product } from "../../../constants";

const ViewProductImages = ({ viewImages, setViewImages, images }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div
      className={`fixed transition-all duration-300 ${
        viewImages ? "opacity-100 visible" : "opacity-0 invisible"
      } inset-0 w-full h-full bg-black/80 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10 px-5 md:px-20 z-50`}
      onClick={() => setViewImages(false)}
    >
      <div className="hidden sm:block" onClick={(e) => e.stopPropagation()}>
        <div
          className="w-14 bg-white h-12 flex items-center justify-center rounded-lg cursor-pointer"
          onClick={() => {
            activeImage !== 0 && setActiveImage(activeImage - 1);
          }}
        >
          <GoChevronLeft className="text-4xl" />
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[800px] bg-white rounded-2xl p-5 sm:p-10"
      >
        <img
          src={`${API_BASE_URL}/${images[activeImage]?.image}`}
          alt="product image"
        />
      </div>
      <div className="hidden sm:block" onClick={(e) => e.stopPropagation()}>
        <div
          className="w-14 bg-white h-12 flex items-center justify-center rounded-lg cursor-pointer"
          onClick={() => {
            activeImage < images?.length - 1 && setActiveImage(activeImage + 1);
          }}
        >
          <GoChevronRight className="text-4xl" />
        </div>
      </div>

      {/* mobile version */}
      <div className="flex justify-center items-center gap-5 sm:hidden">
        <div onClick={(e) => e.stopPropagation()}>
          <div
            className="w-14 bg-white h-12 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => {
              activeImage !== 0 && setActiveImage(activeImage - 1);
            }}
          >
            <GoChevronLeft className="text-4xl" />
          </div>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <div
            className="w-14 bg-white h-12 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => {
              activeImage < product?.productImages?.length - 1 &&
                setActiveImage(activeImage + 1);
            }}
          >
            <GoChevronRight className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductImages;
