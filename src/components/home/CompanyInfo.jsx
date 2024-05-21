import Heading from "../shared/Heading";
import Button from "../ui/Button";

const CompanyInfo = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading
          title={
            <span className="text-center block">
              What is <span className="text-primary">Etsy?</span>
            </span>
          }
        ></Heading>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          <div className="text-center">
            <h3 className="text-2xl leading-7 mb-5">A community doing good</h3>
            <p>
              Etsy is a global online marketplace, where people come together to
              make, sell, buy, and collect unique items. We’re also a community
              pushing for positive change for small businesses, people, and the
              planet. Here are some of the ways we’re making a positive impact,
              together.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl leading-7 mb-5">
              Support independent creators
            </h3>
            <p>
              There’s no Etsy warehouse – just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl leading-7 mb-5">Peace of mind</h3>
            <p>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 justify-center items-center">
          <h4 className="text-xl text-center">
            Have a question? Well, we’ve got some answers.
          </h4>
          <Button href="/contact">Go to Help Center</Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
