import { Link } from "react-router-dom";
import { cn } from "../../../lib/utills";
import Loading from "./Loading";

const Button = ({
  type = "button",
  className = "",
  href = "",
  children,
  onClick,
  loading,
}) => {
  return href ? (
    <Link
      className={cn(
        `py-2 px-4 rounded-[7px] bg-primary text-white text-[15px]  transition-all hover:bg-[#4570EA] ${
          loading && "cursor-not-allowed bg-gray-600 hover:bg-gray-600"
        }`,
        className
      )}
      to={href}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={cn(
        `py-2 px-4 rounded-[7px] bg-primary text-white text-[15px]  transition-all hover:bg-[#4570EA] ${
          loading && "cursor-not-allowed bg-gray-600 hover:bg-gray-600"
        }`,
        className
      )}
      onClick={onClick}
      disabled={loading}
    >
      <div className="flex items-center gap-3">
        {loading && <Loading className="w-7 h-7" />}{" "}
        <div className="min-w-fit flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </button>
  );
};

export default Button;
