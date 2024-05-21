// from-[#FDE1F5]
// from-[#ECF0FF]
// from-[#F8F8D9]
// from-[#FEF5EB]
// from-[#E2FDE2]
// from-[#FEE9E8]

const CategoryItem = ({ image, name, total, color }) => {
  return (
    <div className="h-[170px]">
      <div
        className={`p-4 rounded-md bg-gradient-to-b h-20 duration-300 transition-all hover:h-[110%] from-[${color}] to-[#FFFFFF]`}
      >
        <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 flex flex-col items-center justify-center cursor-pointer">
          <img src={`/images/categories/${image}`} alt="" />
          <h3 className="font-bold text-[15px] mt-2">{name}</h3>
          <span className="text-[13px] font-light">{total} Items</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
