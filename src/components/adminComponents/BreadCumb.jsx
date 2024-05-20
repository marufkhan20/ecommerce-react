import { Link } from "react-router-dom";

const BreadCumb = ({ title = "", page = "", children }) => {
  return (
    <div className="px-5 py-6 rounded-xl bg-[#ECF2FF] flex items-center justify-between gap-5 flex-wrap">
      <div>
        <h2 className="text-[22px] font-semibold mb-2">{title}</h2>
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="w-1 h-1 rounded-full bg-[#2a3547]"></li>
          <li>{page}</li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default BreadCumb;
