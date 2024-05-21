"use client";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleDown, FaBars, FaRegHeart } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { GrClose, GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import { menus } from "../../constants";
import { useAuthStore, useCartStore } from "../../store";
import Button from "../ui/Button";
import Cart from "./Cart";
import MobileNav from "./MobileNav";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { pathname } = useLocation();

  const { state } = useAuthStore();
  const { token } = state || {};

  const { cart } = useCartStore();

  useEffect(() => {
    setOpenCart(false);
  }, [pathname]);
  return (
    <>
      <header>
        {/* top header */}
        <div className="bg-[#F8F8FB] text-[#777]">
          <div className="container flex items-center justify-between gap-5 flex-wrap py-3">
            <div>
              <ul className="flex items-center gap-4 flex-wrap text-[13px]">
                <li className="flex items-center gap-2">
                  <FiPhoneCall className="text-base" />
                  <span>+91 987 654 3210</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-base" />
                  <span>+91 987 654 3210</span>
                </li>
              </ul>
            </div>
            <span className="text-[13px]">
              {"World's"} Fastest Online Shopping Destination
            </span>
            <div>
              <ul className="flex items-center gap-4 flex-wrap text-[13px]">
                <li className="flex items-center gap-2">
                  <Link
                    className="text-[13px] transition-all hover:text-primary"
                    to="#"
                  >
                    Help?
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    className="text-[13px] transition-all hover:text-primary"
                    to="#"
                  >
                    Track Order?
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    className="text-[13px] transition-all hover:text-primary"
                    to="#"
                  >
                    English
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* header center */}
        <div className="py-9">
          <div className="container flex items-center justify-between gap-5 flex-wrap">
            <Link to="/" className="flex items-end gap-2">
              <img src="/images/logo.png" alt="logo" />
              <h3 className="text-3xl text- font-extrabold">Logo</h3>
            </Link>

            <div className="w-[45%] flex items-center justify-between gap-5 border border-border rounded-md">
              <input
                type="text"
                className="outline-none bg-transparent w-full px-4 py-4 border-none text-body text-[13px]"
                placeholder="Search Products..."
              />
              <div className="pr-4 cursor-pointer text-lg">
                <IoSearchOutline className="" />
              </div>
            </div>

            <div>
              <ul className="flex items-center gap-7">
                <li className="flex items-center group gap-2 cursor-pointer">
                  <LuUser2 className="text-2xl group-hover:text-primary transition-all" />
                  <div className="flex flex-col gap">
                    <span className="text-body group-hover:text-primary transition-all text-xs">
                      Account
                    </span>
                    <span className="text-[13px] group-hover:text-primary transition-all uppercase text-[#4b5966] font-medium">
                      Login
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-2 group cursor-pointer">
                  <FaRegHeart className="text-2xl group-hover:text-primary transition-all" />
                  <div className="flex flex-col gap">
                    <span className="text-body group-hover:text-primary transition-all text-xs">
                      Wishlist
                    </span>
                    <span className="text-[13px] group-hover:text-primary transition-all uppercase text-[#4b5966] font-medium">
                      3-Items
                    </span>
                  </div>
                </li>
                <li
                  className="flex items-center gap-2 group cursor-pointer"
                  onClick={() => setOpenCart(true)}
                >
                  <SlHandbag className="text-2xl group-hover:text-primary transition-all" />
                  <div className="flex flex-col gap">
                    <span className="text-body group-hover:text-primary transition-all text-xs">
                      Cart
                    </span>
                    <span className="text-[13px] group-hover:text-primary transition-all uppercase text-[#4b5966] font-medium">
                      3-Items
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* header bottom */}
        <div className="py-[6px] border-y border-border">
          <div className="container flex items-center justify-between gap-5 flex-wrap">
            <Button className="flex items-center gap-3 px-3 py-3">
              <BiCategory className="text-2xl" />
              <span>All Categories</span>
              <FaAngleDown className="text-lg" />
            </Button>

            <nav>
              <ul className="flex items-center gap-7 flex-wrap">
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Others
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[15px] transition-all hover:text-primary font-medium text-[#4B5966]"
                    to="/"
                  >
                    Offers
                  </Link>
                </li>
              </ul>
            </nav>

            <Button className="flex items-center gap-3 px-3 py-3">
              <GrLocation className="text-2xl" />
              <span>Your Location</span>
              <FaAngleDown className="ml-6 text-lg" />
            </Button>
          </div>
        </div>
      </header>

      <header
        className={`${
          pathname === "/" ? "absolute" : "bg-white"
        } top-0 left-0 right-0 hidden w-full z-40 py-8`}
      >
        <div className="container flex items-center justify-between gap-5 flex-wrap">
          <Link to="/" className="text-primary font-bold text-2xl">
            Logo Here
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {menus?.map((menu) => (
                <li
                  className="font-semibold text-black cursor-pointer flex items-center gap-2 transition-all hover:text-primary relative menu"
                  key={menu?.name}
                >
                  <Link to={menu?.href}>{menu?.name}</Link>
                  {menu?.subMenu?.length > 0 && <FaAngleDown />}

                  {menu?.subMenu?.length > 0 && (
                    <ul className="absolute top-[200%] bg-white px-8 py-10 min-w-[280px] flex flex-col gap-4 text-secondary text-sm transition-all opacity-0 invisible translate-y-5 rounded-lg">
                      {menu?.subMenu?.map((item) => (
                        <li
                          className="transition-all hover:ml-2 font-medium hover:text-primary"
                          key={item}
                        >
                          <Link to={`categories/${item}`}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <Link to="#" onClick={() => setSearchBar(true)}>
              <img
                src="/images/icons/search.png"
                className="w-5"
                alt="search"
              />
            </Link>
            <Link to="/my-account">
              {token ? (
                <img src="/images/user.png" className="w-6" alt="user" />
              ) : (
                <img src="/images/icons/user.png" className="w-5" alt="user" />
              )}
            </Link>
            <Link to="/my-account/wishlist">
              <img src="/images/icons/star.png" className="w-5" alt="star" />
            </Link>
            <Link to="/cart" className="relative">
              <img src="/images/icons/cart.png" className="w-5" alt="cart" />
              <p className="absolute w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center top-[-50%] right-[-50%] text-sm">
                {cart ? cart?.totalQty : 0}
              </p>
            </Link>
          </div>

          <FaBars
            onClick={() => setOpenNav(true)}
            className="block lg:hidden text-lg cursor-pointer"
          />
        </div>

        {/* mobile nav */}
        <MobileNav openNav={openNav} setOpenNav={setOpenNav} />

        {/* search bar */}
        <div
          className={`transition-all duration-300 ${
            searchBar ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed top-0 left-0 right-0 w-full bg-white py-7`}
        >
          <div className="container flex items-center gap-5">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-2xl w-full"
            />
            <GrClose
              className="text-2xl cursor-pointer"
              onClick={() => setSearchBar(false)}
            />
          </div>
        </div>
      </header>

      <Cart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export default Header;
