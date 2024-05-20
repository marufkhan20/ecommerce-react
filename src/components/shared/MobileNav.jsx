"use client";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { menus } from "../../constants";

const MobileNav = ({ openNav, setOpenNav }) => {
  // const location = useLocation();
  // const { pathname } = location;

  // useEffect(() => {
  //   setOpenNav(false);
  // }, [pathname, setOpenNav]);
  return (
    <div
      className={`transition-all duration-300 fixed ${
        openNav ? "inset-0 lg:-top-[200%]" : "-top-[200%]"
      } w-full h-full bg-white`}
    >
      <div className="p-5 pt-10 flex justify-end">
        <AiOutlineClose
          onClick={() => setOpenNav(false)}
          className="cursor-pointer text-lg"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 px-5">
        <nav>
          <ul className="flex flex-col items-center gap-5">
            {menus?.map((menu) => (
              <li
                className="font-semibold text-black cursor-pointer flex items-center gap-2 transition-all hover:text-primary relative menu"
                key={menu?.name}
              >
                <Link to={menu?.href}>{menu?.name}</Link>
                {menu?.subMenu?.length > 0 && <FaAngleDown />}

                {/* {menu?.subMenu?.length > 0 && (
                  <ul className="bg-white px-8 py-10 min-w-[280px] flex flex-col gap-4 text-secondary text-sm transition-all opacity-0 invisible translate-y-5 rounded-lg">
                    {menu?.subMenu?.map((item) => (
                      <li
                        className="transition-all hover:ml-2 font-medium hover:text-primary"
                        key={item}
                      >
                        <Link to={`categories/${item}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Link to="#">
            <img src="/images/icons/search.png" className="w-5" alt="search" />
          </Link>
          <Link to="#">
            <img src="/images/icons/user.png" className="w-5" alt="user" />
          </Link>
          <Link to="#">
            <img src="/images/icons/star.png" className="w-5" alt="star" />
          </Link>
          <Link to="/cart">
            <img src="/images/icons/cart.png" className="w-5" alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
