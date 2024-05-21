import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container">
        <div className="py-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <Link className="font-semibold text-2xl" href="/">
              Logo Here
            </Link>
            <p className="my-5">
              As a car owner, you have to recognize that your vehicle requires a
              lot of care to keep running in optimum shape.
            </p>
            <ul className="flex items-center gap-3">
              <li className="w-8 h-8 rounded-full border border-border text-heading flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-border text-heading flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-border text-heading flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-border text-heading flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link to="#">
                  <FaPinterest />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-heading font-medium text-lg mb-5 pb-3 border-b border-border">
              Get In Touch
            </h3>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p className="mt-1">support@example.com</p>
            <h2 className="text-xl text-white mt-1">+ (406) 555-0120</h2>
          </div>

          <div className="text-body text-sm">
            <h3 className="text-heading font-medium text-lg mb-5 pb-3 border-b border-border">
              Information
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Returns</Link>
              </li>
              <li>
                <Link to="#">Policies</Link>
              </li>
              <li>
                <Link to="#">Gift Cards</Link>
              </li>
            </ul>
          </div>

          <div className="text-body text-sm">
            <h3 className="text-heading font-medium text-lg mb-5 pb-3 border-b border-border">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Returns</Link>
              </li>
              <li>
                <Link to="#">Policies</Link>
              </li>
              <li>
                <Link to="#">Gift Cards</Link>
              </li>
            </ul>
          </div>

          <div className="text-body text-sm">
            <h3 className="text-heading font-medium text-lg mb-5 pb-3 border-b border-border">
              Useful links
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="#">My Account</Link>
              </li>
              <li>
                <Link to="#">Order Tracking</Link>
              </li>
              <li>
                <Link to="#">All Products</Link>
              </li>
              <li>
                <Link to="#">All Services</Link>
              </li>
              <li>
                <Link to="#">Service Details</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-[14px] flex items-center gap-5 justify-between flex-wrap border-t border-border bg-[#F8F8FB]">
        <div className="container">
          <p className="text-[13px] font-light text-body">
            Copyright © 2023 Company Name. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
