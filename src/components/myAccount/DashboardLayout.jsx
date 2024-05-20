import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import Breadcumb from "../shared/Breadcumb";
import Sidebar from "../shared/Sidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  // if (!token) {
  //   navigate("/auth");
  // }
  return (
    <main>
      <Breadcumb title="Dashboard" pathnames={["Home", "My Account"]} />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 py-20">
          <Sidebar />
          <div className="account-content">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
