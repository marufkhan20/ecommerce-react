import { useQuery } from "@tanstack/react-query";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useIntersection } from "react-use";
import { getCategories } from "../../../http/api";
import Heading from "../../shared/Heading";
import CategoryItem from "./CategoryItem";

const Categories = () => {
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
      y: 100,
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

  const { data: categoryData, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
  });
  return (
    <>
      <section ref={sectionRef} className="py-[74px]">
        <div className="container grid grid-cols-6 gap-5">
          <CategoryItem
            name="Dairy & Milk"
            color="#FDE1F5"
            total="48"
            image="1.png"
          />
          <CategoryItem
            name="Snack & Spicy"
            color="#ECF0FF"
            total="48"
            image="2.png"
          />
          <CategoryItem
            name="Juice & Drinks"
            color="#F8F8D9"
            total="48"
            image="3.png"
          />
          <CategoryItem
            name="Seafood"
            color="#FEF5EB"
            total="48"
            image="4.png"
          />
          <CategoryItem
            name="Fast Food"
            color="#E2FDE2"
            total="48"
            image="5.png"
          />
          <CategoryItem name="Eggs" color="#FEE9E8" total="48" image="6.png" />
        </div>
      </section>

      <section className="py-14 hidden">
        <div className="container">
          <Heading>
            Make it personal—shop{" "}
            <span className="text-primary">
              custom gifts, decor, <br />
              and on-sale
            </span>{" "}
            finds now!
          </Heading>

          {isPending && (
            <div className="flex items-center justify-center mt-8">
              <img className="w-20 h-20" src="/images/loading.gif" alt="" />
            </div>
          )}

          {categoryData?.results?.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
              {categoryData?.results?.map((category) => (
                <Link
                  key={category?.id}
                  href="#"
                  className="flex flex-col gap-3 items-center  category-item"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src={category?.image}
                      alt="category"
                      className="rounded-full transition-all"
                    />
                  </div>
                  <h4 className="text-black font-semibold text-lg transition-all">
                    {category?.name}
                  </h4>
                </Link>
              ))}
            </div>
          )}

          {!isPending && !categoryData && (
            <div className="mt-12 text-center text-lg font-semibold">
              No Category found!!
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
