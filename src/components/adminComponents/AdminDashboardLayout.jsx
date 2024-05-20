import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminDashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, token } = useAuthStore();

  const router = useNavigate();

  // useEffect(() => {
  //   if (!user && !token) {
  //     return router("/admin/login");
  //   }
  // }, [router, token, user]);
  return (
    <main className="flex justify-between gap-8 pb-10 min-h-full bg-white">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="min-h-screen pl-8 lg:p-0 w-custom-full">
        <Header setOpenSidebar={setOpenSidebar} />
        <div className="w-full pl-1 pr-8 xl:px-2 h-full xl:w-[75%] xl:mx-auto overflow-hidden">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboardLayout;
