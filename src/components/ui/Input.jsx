import { cn } from "../../lib/utills";

const Input = ({
  placeholder = "",
  type = "text",
  value,
  id = "",
  className = "",
  onChange,
  ...rest
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={cn(
        "px-5 w-full block py-3 rounded-full bg-white  outline-none focus:ring-1 ring-primary placeholder:font-normal",
        className
      )}
      id={id}
      {...rest}
    />
  );
};

export default Input;
