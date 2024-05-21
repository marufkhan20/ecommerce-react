import { cn } from "../../lib/utills";

const Heading = ({ className = "", title = "", subTitle = "" }) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h2 className="text-[25px] leading-[25px] font-bold">{title}</h2>
      <span className="text-sm font-light text-body">{subTitle}</span>
    </div>
  );
};

export default Heading;
