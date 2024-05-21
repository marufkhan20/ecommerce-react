import { FaChevronRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Breadcumb = ({ title, pathnames }) => {
  return (
    <div className="container">
      <div className="px-7 py-5 border-r border-l border-b border-border rounded-md flex items-center justify-between gap-5 flex-wrap">
        <p className="text-[15px] font-semibold text-heading">{title}</p>
        <ul className="flex items-center gap-2 text-heading text-sm">
          <li>
            <Link to="/" className="transition-all hover:text-primary">
              {pathnames[0]}
            </Link>
          </li>
          <li>
            <FaChevronRight className="text-xs" />
          </li>
          <li className="text-primary">{pathnames[1]}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcumb;
