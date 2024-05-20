import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Orders = () => {
  return (
    <main>
      <table className="w-full">
        <thead>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Order ID
          </th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Product
          </th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">Date</th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Status
          </th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Price
          </th>
          <th className="font-normal bg-[#E9EAED] py-5 text-left px-5">
            Actions
          </th>
        </thead>

        <tbody>
          <tr className="transition-all hover:bg-gray-300">
            <td className="p-5 transition-all hover:text-primary">
              <Link href="#">#9801</Link>
            </td>
            <td className="p-5">Shirt 1</td>
            <td className="p-5">April 18, 2024</td>
            <td className="p-5">Processing</td>
            <td className="p-5">$18.00</td>
            <td className="px-5">
              <Button
                href="/my-account/orders/243945"
                className="py-2 px-5 text-sm"
              >
                View
              </Button>
            </td>
          </tr>
          <tr className="transition-all hover:bg-gray-300">
            <td className="p-5 transition-all hover:text-primary">
              <Link href="#">#9801</Link>
            </td>
            <td className="p-5">Shirt 1</td>
            <td className="p-5">April 18, 2024</td>
            <td className="p-5">Processing</td>
            <td className="p-5">$18.00</td>
            <td className="px-5">
              <Button
                href="/my-account/orders/243945"
                className="py-2 px-5 text-sm"
              >
                View
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Orders;
