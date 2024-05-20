import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const RelatedProducts = ({ products }) => {
  return (
    <section className="pb-20">
      <div className="container">
        <Heading>Releated Products</Heading>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductItem key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
