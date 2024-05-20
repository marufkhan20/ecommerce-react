import { Link } from "react-router-dom";
import { cn } from "../../lib/utills";
import Loading from "../adminComponents/ui/Loading";

const Button = ({
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  href,
  children,
  loading,
  ...rest
}) => {
  const styles = `
    font-bold text-sm px-9 py-4 rounded-full transition-all  ${
      loading && "cursor-not-allowed bg-gray-600 hover:bg-gray-600"
    } ${
    variant === "primary" &&
    "bg-primary text-white hover:bg-black hover:text-white"
  } ${
    variant === "secondary" &&
    "bg-white text-black hover:bg-black hover:text-white"
  } ${variant === "dark" && "bg-black text-white hover:bg-primary"}
  `;

  return href ? (
    <Link to={href} className={cn(styles, className)}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={cn(styles, className)}
    >
      {loading ? <Loading className="w-6 h-6" /> : children}
    </button>
  );
};

export default Button;
