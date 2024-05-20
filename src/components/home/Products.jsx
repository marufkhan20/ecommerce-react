"use client";
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
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Shop our popular gift <span className="text-primary">products</span>
        </Heading>

        {isPending && (
          <div className="flex items-center justify-center mt-8">
            <img className="w-20 h-20" src="/images/loading.gif" alt="" />
          </div>
        )}
        {productData?.results?.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productData?.results?.map((product) => (
              <ProductItem key={product?.id} product={product} />
            ))}
          </div>
        )}

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
