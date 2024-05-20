import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCategories } from "../../http/api";
import Heading from "../shared/Heading";

const Categories = () => {
  const { data: categoryData, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
  });
  return (
    <section className="py-14">
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
  );
};

export default Categories;
