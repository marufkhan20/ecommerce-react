import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store";

const Sidebar = () => {
  const { pathname } = useLocation();

  // Define a function to check if the current URL matches the given href
  const isActive = (href) => {
    return pathname === href;
  };

  const { logout } = useAuthStore();
  return (
    <div className="w-full md:w-[320px] border bg-white rounded-md h-fit">
      <ul className="flex flex-col divide-y">
        <Link
          to="/my-account"
          className={`cursor-pointer transition-all hover:text-primary py-5 px-2 hover:bg-gray-200 ${
            isActive("/my-account") && "bg-gray-200 text-primary"
          }`}
        >
          <span>Dashboard</span>
        </Link>
        <Link
          to="/my-account/orders"
          className={`cursor-pointer transition-all hover:text-primary py-5 px-2 hover:bg-gray-200 ${
            isActive("/my-account/orders") && "bg-gray-200 text-primary"
          }`}
        >
          <span>Orders</span>
        </Link>
        <Link
          to="/my-account/edit-account"
          className={`cursor-pointer transition-all hover:text-primary py-5 px-2 hover:bg-gray-200 ${
            isActive("/my-account/edit-account") && "bg-gray-200 text-primary"
          }`}
        >
          <span>Account Details</span>
        </Link>
        <Link
          to="/my-account/wishlist"
          className={`cursor-pointer transition-all hover:text-primary py-5 px-2 hover:bg-gray-200 ${
            isActive("/my-account/wishlist") && "bg-gray-200 text-primary"
          }`}
        >
          <span>Wishlist</span>
        </Link>
        <li className="cursor-pointer transition-all hover:text-primary py-5 px-2 hover:bg-gray-200">
          <Link onClick={logout} className="w-full block" href="/auth">
            <span>Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
