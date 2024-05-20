"use client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Input from "./ui/Input";
import Loading from "./ui/Loading";

const Table = ({
  isLoading,
  headers,
  cols,
  button,
  limit,
  setLimit,
  search,
  setSearch,
  pages,
  page,
  setPage,
  totalItems,
  children,
}) => {
  return (
    <div className="mt-7 box-shadow rounded-xl pb-5 overflow-hidden">
      <div className="p-5 border-b flex items-center gap-5 flex-wrap justify-between">
        <div className="flex items-center gap-4">
          {!button && (
            <>
              <span className="font-medium">Show</span>
              <select
                name=""
                id=""
                className="bg-white border rounded py-2 px-3"
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value="10" selected={limit === 10}>
                  10
                </option>
                <option value="25" selected={limit === 25}>
                  25
                </option>
                <option value="2500" selected={limit === 2500}>
                  2500
                </option>
              </select>
            </>
          )}
          {button}
        </div>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[300px]"
          placeholder="Search..."
        />
      </div>

      <div className="overflow-auto">
        <div
          className={`min-w-[1100px] m-5 bg-white rounded box-shadow grid ${cols}`}
        >
          {headers?.map((header, idx) => (
            <span
              key={header}
              className={`font-semibold py-3 border-b ${idx === 0 && "pl-4"} ${
                idx + 1 === headers?.length && "pr-4"
              }`}
            >
              {header}
            </span>
          ))}

          {isLoading ? (
            <div>
              <Loading type="secondary" />
            </div>
          ) : !totalItems ? (
            <div className="py-4 px-4">No Items Found!</div>
          ) : (
            <div
              className={`min-w-[1100px] m-5 bg-white rounded box-shadow grid ${cols} items-center`}
            >
              {children}
            </div>
          )}
        </div>
      </div>

      {!isLoading && totalItems !== 0 && (
        <div className="px-5 flex items-center justify-between gap-5 flex-wrap">
          <p>
            {totalItems && (
              <>
                Showing {page * limit + 1 - limit} to{" "}
                {page * limit > totalItems ? totalItems : page * limit} of{" "}
                {totalItems} entries
              </>
            )}
          </p>
          {totalItems && (
            <ul className="flex items-center">
              <li
                className={`p-1 mr-2 rounded text-primary transition-all hover:bg-primary/30 cursor-pointer`}
                onClick={() => (page !== 1 ? setPage(page - 1) : {})}
              >
                <FaAngleLeft />
              </li>
              {Array.from({ length: pages }, (_, idx) => (
                <li
                  key={idx + 1}
                  className={`p-1 px-3 rounded text-primary transition-all ${
                    page === idx + 1
                      ? "bg-primary/30"
                      : "hover:bg-primary/30 cursor-pointer"
                  }`}
                  onClick={() => (page === idx + 1 ? {} : setPage(idx + 1))}
                >
                  {idx + 1}
                </li>
              ))}
              <li
                className="p-1 rounded text-primary transition-all hover:bg-primary/30 ml-2 cursor-pointer"
                onClick={() => (page !== pages ? setPage(page + 1) : {})}
              >
                <FaAngleRight />
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
