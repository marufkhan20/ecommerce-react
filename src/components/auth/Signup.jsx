"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "../../http/api";
import Error from "../adminComponents/ui/Error";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errors, setErrors] = useState({});

  // prepare api request
  const { mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data) => {
      const { data: res } = await register(data);
      return res;
    },
    onSuccess: () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
      toast.success("User registered successfully, please login.");
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First name is required!!";
    }

    if (!lastName) {
      validationErrors.lastName = "Last name is required!!";
    }

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required!!";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword =
        "Password and confirm password doest not match!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      email,
      first_name: firstName,
      last_name: lastName,
      password1: password,
      password2: confirmPassword,
    });
  };

  return (
    <div className="sm:pl-10 py-11">
      <h2 className="text-[28px] font-semibold mb-8">Register</h2>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name *</label>
            <Input
              placeholder="Enter your first name..."
              type="text"
              className="text-sm py-4 px-5"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <Error>{errors?.firstName}</Error>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last Name *</label>
            <Input
              placeholder="Enter your last name..."
              type="text"
              className="text-sm py-4 px-5"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Error>{errors?.lastName}</Error>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <Input
              placeholder="Enter your confirm password..."
              type="password"
              className="text-sm py-4 px-5"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Error>{errors?.confirmPassword}</Error>
          <Button loading={isPending} type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
