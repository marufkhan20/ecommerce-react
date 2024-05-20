import Button from "../ui/Button";

const FeaturedProduct = () => {
  return (
    <section className="relative pt-28 sm:pt-0">
      <div className="container flex items-center justify-center gap-10 min-h-screen py-[120px] z-30">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="font-extrabold text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px]">
              Create Custom <br />
              packaging and boxes
            </h2>
            <p className="w-[60%] mx-auto mt-8 lg:m-0 lg:mt-8">
              Turn your ideas into premium products that leave a lasting
              impression
            </p>
            <div className="mt-12 flex justify-center lg:justify-start items-center flex-wrap gap-4">
              <Button>Start Selling</Button>
              <Button variant="secondary">Watch Video</Button>
            </div>
            <p className="mt-8 flex justify-center lg:justify-start flex-wrap items-center w-full gap-2 text-sm">
              <span>Free Signup</span>{" "}
              <span className="w-1 h-1 rounded-full bg-black" />{" "}
              <span>No order minimums</span>{" "}
              <span className="w-1 h-1 rounded-full bg-black" />{" "}
              <span>100+ products</span>
            </p>

            <h4 className="mt-8">50+ items shipped every day</h4>

            <div className="flex flex-wrap items-center gap-10 mt-10">
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icons/home.png" alt="home" />
                </div>
                <div>
                  <h4 className="font-bold">34</h4>
                  <span>Sores</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icons/score.png" alt="score" />
                </div>
                <div>
                  <h4 className="font-bold">2068</h4>
                  <span>Products sold</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icons/calender.png" alt="calender" />
                </div>
                <div>
                  <h4 className="font-bold">25</h4>
                  <span>months in Business</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/images/products/1.png" alt="product" />
          </div>
        </div>
      </div>

      {/* bg shadow */}
      <div className="absolute -top-[15%] -right-[10%] bg-[#E5EAFD] h-[1000px] w-[1000px] rounded-full -z-20" />
    </section>
  );
};

export default FeaturedProduct;
