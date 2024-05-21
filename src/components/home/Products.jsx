"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { products as productData } from "../../data/products";
import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const Products = () => {
  const isPending = false;
  // const { data: productData, isPending } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const { data } = await getProducts();
  //     return data;
  //   },
  // });

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 300,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    if (intersection && intersection.intersectionRatio < 0.2) {
      fadeOut(sectionRef.current);
    } else {
      fadeIn(sectionRef.current);
    }
  }, [intersection]);
  return (
    <section className="py-14" ref={sectionRef}>
      <div className="container">
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <Heading
            subTitle="Shop online for new arrivals and get free shipping!"
            title={
              <span>
                New <span className="text-primary">Arrivals</span>
              </span>
            }
          />

          <nav>
            <ul className="flex items-center gap-10">
              <li className="text-body text-sm font-medium uppercase cursor-pointer transition-all hover:text-primary">
                All
              </li>
              <li className="text-body text-sm font-medium uppercase cursor-pointer transition-all hover:text-primary">
                clothes
              </li>{" "}
              <li className="text-body text-sm font-medium uppercase cursor-pointer transition-all hover:text-primary">
                footwear
              </li>{" "}
              <li className="text-body text-sm font-medium uppercase cursor-pointer transition-all hover:text-primary">
                accessories
              </li>
            </ul>
          </nav>
        </div>

        {isPending && (
          <div className="flex items-center justify-center mt-8">
            <img className="w-20 h-20" src="/images/loading.gif" alt="" />
          </div>
        )}
        {/* {productData?.results?.length > 0 && ( */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* {productData?.results?.map((product) => ( */}
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {/* )} */}

        {!isPending && !productData && (
          <div className="mt-12 text-center text-lg font-semibold">
            No Products found!!
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
