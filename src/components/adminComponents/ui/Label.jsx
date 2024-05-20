import { cn } from "../../../lib/utills";

const Label = ({ htmlFor = "", className = "", children, ...rest }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-base font-semibold", className)}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
