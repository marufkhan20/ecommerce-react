const OrderDetails = () => {
  return (
    <main>
      <p>
        Order <span className="text-black">#9801</span> was placed on{" "}
        <span className="text-black">April 18, 2024</span> and is currently{" "}
        <span className="text-black">On hold.</span>
      </p>

      <h2 className="text-black text-[28px] font-medium mt-2">Order details</h2>

      <table className="w-full mt-4">
        <thead>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Products
          </th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Total
          </th>
        </thead>
        <tbody>
          <tr>
            <td className="flex flex-col gap-2 p-5">
              <span>Shirt 1</span>
              <span>Shirt 2</span>
            </td>
            <td className="p-5">$9.00</td>
          </tr>
          <tr>
            <td className="p-5">Subtotal:</td>
            <td className="p-5">$9.00</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mt-4">
        <thead>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Shipping:
          </th>
          <th className="bg-[#E9EAED] py-5 text-left px-5">$10.00</th>
        </thead>
        <tbody>
          <tr>
            <td className="p-5">Payment method:</td>
            <td className="p-5">Check payments</td>
          </tr>
        </tbody>
        <tfoot>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Total:
          </th>
          <th className="bg-[#E9EAED] py-5 text-left px-5">$19.90</th>
        </tfoot>
      </table>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <h2 className="text-black text-[28px] font-medium mt-2">
            Billing address
          </h2>
          <div className="flex flex-col mt-4 gap-1">
            <span>Rashedul Islam</span>
            <span>Senbag, noakhali</span>
            <span>new york, CA 10001</span>
            <span>01960038965</span>
            <span>maruf@gmail.com</span>
          </div>
        </div>
        <div>
          <h2 className="text-black text-[28px] font-medium mt-2">
            Shipping address
          </h2>
          <div className="flex flex-col mt-4 gap-1">
            <span>Rashedul Islam</span>
            <span>Senbag, noakhali</span>
            <span>new york, CA 10001</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
