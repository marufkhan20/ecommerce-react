import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState("home");
  const [openSubMenu, setOpenSubMenu] = useState("");

  useEffect(() => {
    if (pathname) {
      pathname?.includes("/products")
        ? setOpenMenu(1)
        : pathname?.includes("/orders")
        ? setOpenMenu(2)
        : pathname?.includes("/categories")
        ? setOpenMenu(4)
        : setOpenMenu("home");

      pathname === "/admin/products" && setOpenSubMenu(2);
      pathname === "/admin/products/add-product" && setOpenSubMenu(1);
      pathname === "/admin/orders" && setOpenSubMenu(3);
      pathname === "/admin/categories" && setOpenSubMenu(5);
      pathname === "/admin/categories/add-category" && setOpenSubMenu(4);
    }
  }, [pathname]);
  return (
    <>
      <div
        className={`hidden lg:block min-w-[280px] min-h-screen overflow-auto p-5 bg-white border-r`}
      >
        <h2 className="text-2xl">
          <Link to="/admin">Logo Here</Link>
        </h2>
        <ul className="mt-10 flex flex-col gap-1">
          <li>
            <Link
              to="/admin"
              className={`flex w-full items-center gap-3 px-3 py-2 rounded-[7px] transition-all ${
                openMenu === "home"
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>

          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center justify-between gap-3 px-3 py-2 rounded-[7px] transition-all cursor-pointer ${
                openMenu === 1
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 1 ? false : 1)}
            >
              <div className="flex items-center gap-3">
                <BsFileEarmarkText className="text-lg" />
                <span>Products</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 1 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 1 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/admin/products"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 2
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/products/add-product"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 1
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>Add Product</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                openMenu === 2
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 2 ? false : 2)}
            >
              <div className="flex items-center gap-3">
                <GoHistory className="text-lg" />
                <span>Orders</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 2 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 2 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/admin/orders"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 3
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Orders</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="overflow-hidden">
            <span
              className={`flex w-full items-center justify-between gap-3 px-3 py-2 rounded-[7px] transition-all cursor-pointer ${
                openMenu === 4
                  ? "bg-primary text-white"
                  : "hover:bg-[#ECF2FF] hover:text-primary"
              }`}
              onClick={() => setOpenMenu(openMenu === 4 ? false : 4)}
            >
              <div className="flex items-center gap-3">
                <BiCategoryAlt className="text-lg" />
                <span>Categories</span>
              </div>
              <FaChevronDown
                className={`text-xs ${openMenu === 4 && "rotate-180"}`}
              />
            </span>
            <ul
              className={`transition-all ${openMenu === 4 ? "h-full" : "h-0"}`}
            >
              <li>
                <Link
                  to="/admin/categories"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 5
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>All Category</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/categories/add-category"
                  className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                    openSubMenu === 4
                      ? "text-primary gap-5 active"
                      : "hover:gap-5 hover:text-primary"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                  <span>Add Category</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* mobile sidebar */}
      <div
        className={`transition-all left-0 duration-300 top-0 bottom-0 fixed ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden bg-gray-400/30 bg-blur z-50 w-full`}
        onClick={() => setOpenSidebar(false)}
      >
        <div
          className={`w-[280px] min-h-screen max-h-fit overflow-auto p-5 bg-white border-r`}
          onClick={(event) => event.stopPropagation()}
        >
          <h2 className="text-2xl">
            <Link to="/">TBM</Link>
          </h2>
          <ul className="mt-10 flex flex-col gap-1">
            <li>
              <Link
                to="/"
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-[7px] transition-all ${
                  openMenu === "home"
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
              >
                <FiHome className="text-lg" />
                <span>Home</span>
              </Link>
            </li>
            <li className="overflow-hidden">
              <span
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 rounded-[7px] transition-all cursor-pointer ${
                  openMenu === 1
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
                onClick={() => setOpenMenu(openMenu === 1 ? false : 1)}
              >
                <div className="flex items-center gap-3">
                  <BsFileEarmarkText className="text-lg" />
                  <span>Forms</span>
                </div>
                <FaChevronDown
                  className={`text-xs ${openMenu === 1 && "rotate-180"}`}
                />
              </span>
              <ul
                className={`transition-all ${
                  openMenu === 1 ? "h-full" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/forms/notice"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 1
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Notice Concialation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/forms/credit-card"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 2
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Credit Card</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="overflow-hidden">
              <span
                className={`flex w-full items-center cursor-pointer justify-between gap-3 px-3 py-2 rounded-[7px] transition-all ${
                  openMenu === 2
                    ? "bg-primary text-white"
                    : "hover:bg-[#ECF2FF] hover:text-primary"
                }`}
                onClick={() => setOpenMenu(openMenu === 2 ? false : 2)}
              >
                <div className="flex items-center gap-3">
                  <GoHistory className="text-lg" />
                  <span>Campaign History</span>
                </div>
                <FaChevronDown
                  className={`text-xs ${openMenu === 2 && "rotate-180"}`}
                />
              </span>
              <ul
                className={`transition-all ${
                  openMenu === 2 ? "h-full" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/campaign/notice"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 3
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Notice Concialation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/campaign/credit-card"
                    className={`flex items-center gap-3 px-5 py-3 transition-all sub-menu ${
                      openSubMenu === 4
                        ? "text-primary gap-5 active"
                        : "hover:gap-5 hover:text-primary"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full border border-[#2a3547] box" />
                    <span>Credit Card</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
