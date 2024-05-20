import { cn } from "../../../lib/utills";

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
        "text-base w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border",
        className
      )}
      id={id}
      {...rest}
    />
  );
};

export default Input;
