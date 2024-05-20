"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../http/api";
import { useAuthStore } from "../../store";
import Error from "../adminComponents/ui/Error";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const { login: loginToStore } = useAuthStore();

  const router = useNavigate();

  // prepare api request
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      const { data: res } = await login(data);
      return res;
    },
    onError: (error) => {
      if (error?.response?.data?.results?.email) {
        setErrors({
          email: error.response?.data?.results?.email[0],
        });
      }

      if (error?.response?.data?.results?.non_field_errors) {
        setErrors({
          password: error.response?.data?.results?.non_field_errors[0],
        });
      }
    },
    onSuccess: (data) => {
      loginToStore(data);
      setEmail();
      setPassword();
      setErrors({});
      toast.success("User login successfully.");
      router.push("/my-account");
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      email,
      password,
    });
  };
  return (
    <div className="sm:pr-10 sm:border-r py-11">
      <h2 className="text-[28px] font-semibold mb-8">Login</h2>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address *</label>
            <Input
              placeholder="Enter your username or email address..."
              type="email"
              className="text-sm py-4 px-5"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Error>{errors?.email}</Error>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password *</label>
            <Input
              placeholder="Enter your password..."
              type="password"
              className="text-sm py-4 px-5"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Error>{errors?.password}</Error>
          <Button type="submit" loading={isPending}>
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
