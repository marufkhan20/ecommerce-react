import { cn } from "../../lib/utills";

const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={cn(
        "text-center text-[30px] sm:text-[36px] md:text-[40px] md:leading-[45px] lg:text-[45px] lg:leading-[50px]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
