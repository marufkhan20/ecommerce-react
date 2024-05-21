import { MdChevronRight } from "react-icons/md";
import Button from "../ui/Button";

const FeaturedProduct = () => {
  return (
    <section className="mt-11">
      <div
        className="container min-h-[680px] rounded-lg px-28 flex items-center"
        style={{
          backgroundImage: "url(/images/featured-product.jpg)",
        }}
      >
        <div className="flex flex-col gap-6">
          <span className="text-xl font-medium text-primary">
            Starting at $ <span className="font-bold">20.00</span>
          </span>
          <h2 className="text-[55px] font-bold leading-[60px]">
            Fashion sale for <br />
            {"man's"}
          </h2>
          <div>
            <Button
              className="py-3 px-4 flex items-center gap-3"
              variant="light-dark"
            >
              Shop Now
              <div className="flex items-center">
                <MdChevronRight />
                <MdChevronRight className="-ml-[10px]" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
