import { MdDelete } from "react-icons/md";

const headers = ["ID", "Name", "Product", "Title", "Status", "Date", "Action"];

export default function AdminHome() {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7">
        <div className="py-10 rounded-md bg-[#E6FFFA] flex items-center justify-center flex-col gap-2 px-2 text-center">
          <h3 className="text-sm font-semibold text-[#13deb9]">Products</h3>
          <h3 className="text-lg text-[#13deb9] font-semibold">
            {/* {dashbaordInfo?.totalCreditCards} */}48
          </h3>
        </div>
        <div className="py-10 rounded-md bg-[#FBF2EF] flex items-center justify-center flex-col gap-2 px-2 text-center">
          <h3 className="text-sm font-semibold text-[#fa896b]">Orders</h3>
          <h3 className="text-lg text-[#fa896b] font-semibold">
            {/* {dashbaordInfo?.totalNotices} */}39
          </h3>
        </div>
        <div className="py-10 rounded-md bg-[#EBF3FE] flex items-center justify-center flex-col gap-2 px-2 text-center">
          <h3 className="text-sm font-semibold text-[#539bff]">Users</h3>
          <h3 className="text-lg text-[#539bff] font-semibold">
            {/* {dashbaordInfo?.totalCreditCardCampaigns} */}34
          </h3>
        </div>
        <div className="py-10 rounded-md bg-[#FEF5E5] flex items-center justify-center flex-col gap-2 px-2 text-center">
          <h3 className="text-sm font-semibold text-[#ffae1f]">Categories</h3>
          <h3 className="text-lg text-[#ffae1f] font-semibold">
            {/* {dashbaordInfo?.totalNoticeCampaigns} */}39
          </h3>
        </div>
      </div>

      <div className="mt-10 box-shadow rounded-xl pb-5 overflow-hidden">
        <div className="p-5 border-b flex items-center gap-5 flex-wrap justify-between">
          <h3 className="text-lg">Latest Orders</h3>
        </div>
        <div className="overflow-auto">
          <div
            className={`min-w-[1100px] m-5 bg-white rounded box-shadow grid grid-cols-7`}
          >
            {headers?.map((header, idx) => (
              <span
                key={header}
                className={`font-semibold py-3 border-b ${
                  idx === 0 && "pl-4"
                } ${idx + 1 === headers?.length && "pr-4"}`}
              >
                {header}
              </span>
            ))}

            <>
              <span className="py-3 pl-4 flex items-center">1</span>
              <span className="py-3">John Doe</span>
              <span className="py-3 flex items-center">
                <img
                  src="https://static-01.daraz.com.bd/p/5a32d0e51410811735ea81c26eaed848.jpg"
                  alt="product"
                  className="w-16 rounded-lg"
                />
              </span>
              <span className="py-3">Shirt 1</span>
              <span className="py-3 flex items-center">
                <select
                  name=""
                  id=""
                  className="border py-2 px-1 rounded-md outline-none"
                >
                  <option value="">Change Status</option>
                  <option value="" selected>
                    Pending
                  </option>
                  <option value="">Process</option>
                  <option value="">Shipping</option>
                  <option value="">Delivered</option>
                  <option value="">Completed</option>
                  <option value="">Cancelled</option>
                </select>
              </span>
              <span className="py-3 flex items-center">31 March, 2024</span>
              <div className="py-3 pr-4 flex items-center gap-2">
                <button
                  className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                  // onClick={() => deleteCreditCard(creditCard?._id)}
                >
                  {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
                  <MdDelete />
                </button>
              </div>
            </>

            <>
              <span className="py-3 pl-4 flex items-center">2</span>
              <span className="py-3">John Doe</span>
              <span className="py-3 flex items-center">
                <img
                  src="https://static-01.daraz.com.bd/p/5a32d0e51410811735ea81c26eaed848.jpg"
                  alt="product"
                  className="w-16 rounded-lg"
                />
              </span>
              <span className="py-3">Shirt 1</span>
              <span className="py-3 flex items-center">
                <select
                  name=""
                  id=""
                  className="border py-2 px-1 rounded-md outline-none"
                >
                  <option value="">Change Status</option>
                  <option value="" selected>
                    Pending
                  </option>
                  <option value="">Process</option>
                  <option value="">Shipping</option>
                  <option value="">Delivered</option>
                  <option value="">Completed</option>
                  <option value="">Cancelled</option>
                </select>
              </span>
              <span className="py-3 flex items-center">31 March, 2024</span>
              <div className="py-3 pr-4 flex items-center gap-2">
                <button
                  className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                  // onClick={() => deleteCreditCard(creditCard?._id)}
                >
                  {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
                  <MdDelete />
                </button>
              </div>
            </>

            {/* {dashbaordInfo?.mailInfo?.map((mail, idx) => (
              <>
                <span className="py-3 pl-4">{idx + 1}</span>
                <span className="py-3">{mail?.name}</span>
                <span className="py-3">
                  {moment(new Date(mail?.date)).format("MMM Do YY")}
                </span>
                <span
                  className={`py-3 ${
                    mail?.status === "success" ? "text-primary" : "text-red-700"
                  }`}
                >
                  {mail?.status}
                </span>
              </>
            ))} */}
          </div>
        </div>

        {/* {dashbaordInfo?.mailInfo?.length === 0 && (
          <span className="px-5">No Mail Details Found!!</span>
        )} */}
      </div>
    </>
  );
}
