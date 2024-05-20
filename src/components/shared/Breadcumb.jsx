import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Breadcumb = ({ title, pathnames }) => {
  return (
    <div className="py-8 bg-[#EDEEF2]">
      {title && <h2 className="text-[50px] text-center">{title}</h2>}
      <div className="container flex items-center justify-center flex-wrap gap-2">
        {pathnames?.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx === pathnames?.length - 1 ? (
              <span>{item}</span>
            ) : (
              <>
                <Link className="transition-all hover:text-primary" href="/">
                  {item}
                </Link>
                <FaChevronRight className="text-xs" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcumb;
