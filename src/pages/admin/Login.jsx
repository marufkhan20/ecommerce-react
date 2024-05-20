import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/adminComponents/ui/Button";
import Error from "../../components/adminComponents/ui/Error";
import Input from "../../components/adminComponents/ui/Input";
import Label from "../../components/adminComponents/ui/Label";
import { login } from "../../http/api";
import { useAuthStore } from "../../store";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const { login: loginToStore, user, token } = useAuthStore();

  const router = useNavigate();

  // prepare api request
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      const { data: res } = await login(data);
      return res;
    },
    onError: (error) => {
      if (error?.response?.data?.email) {
        setErrors({
          email: error.response?.data?.email[0],
        });
      }

      if (error?.response?.data?.non_field_errors) {
        setErrors({
          password: error.response?.data?.non_field_errors[0],
        });
      }
    },
    onSuccess: (data) => {
      const user = data?.user || {};

      if (!user || !user?.is_active || !user?.is_admin || !user?.is_superuser) {
        return setErrors({
          email: "You are not admin!",
        });
      }

      loginToStore(data);
      setEmail();
      setPassword();
      setErrors({});
      toast.success("Login successfully.");
      router("/admin");
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

  useEffect(() => {
    if (user?.id && token) {
      router.push("/admin");
    }
  }, [user, token, router]);

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-5 py-10 bg-[#f2f4fc]">
      <div className="login-container bg-white rounded-[7px] p-8 w-full sm:w-[445px]">
        <h2 className="text-2xl text-center my-3">Logo Here</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5 pt-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Error>{errors?.email}</Error>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Error>{errors?.password}</Error>
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remeber this Device
              </label>
            </div>
            <Link to="/" className="text-primary font-medium text-sm">
              Forgot Password?
            </Link>
          </div>
          <Button loading={isPending} type="submit" className="text-center">
            Sign In
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
