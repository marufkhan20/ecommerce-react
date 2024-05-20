"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { accessToken, user } = useSelector((state) => state.auth || {});

  const router = useRouter();

  return accessToken && user?._id ? router.push("/") : children;
};

export default PublicRoute;
