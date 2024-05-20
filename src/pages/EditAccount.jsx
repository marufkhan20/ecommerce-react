"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Error from "../components/ui/Error";
import Input from "../components/ui/Input";
import { changePassword, updateAccount } from "../http/api";

const EditAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newConfirmPassword, setNewConfirmPassword] = useState();
  const [errors, setErrors] = useState({});

  // change password api request
  const { mutate, isPending: changePasswordLoading } = useMutation({
    mutationKey: ["changePassword"],
    mutationFn: async (data) => {
      const { data: res } = await changePassword(data);
      return res;
    },
    onError: (error) => {
      if (error?.response?.data?.results?.prev_password) {
        setErrors({
          password: error.response?.data?.results?.prev_password[0],
        });
      }
    },
    onSuccess: () => {
      setPassword("");
      setNewPassword("");
      setNewConfirmPassword("");
      setErrors({});
      toast.success("Password change successfully.");
    },
  });

  // change password handler
  const changePasswordHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!password) {
      validationErrors.password = "Current Password is required!!";
    }

    if (!newPassword) {
      validationErrors.newPassowrd = "New Password is required!!";
    }

    if (!newConfirmPassword) {
      validationErrors.newConfirmPassword =
        "New Confirm Password is required!!";
    } else if (newPassword !== newConfirmPassword) {
      validationErrors.newConfirmPassword =
        "New Password and confirm new password doest not match!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      prev_password: password,
      password1: newPassword,
      password2: newConfirmPassword,
    });
  };

  // update account info api request
  const { mutate: updateAccountMutate, isPending: updateAccountLoading } =
    useMutation({
      mutationKey: ["updateAccount"],
      mutationFn: async (data) => {
        const { data: res } = await updateAccount(data);
        return res;
      },
      onSuccess: () => {
        setErrors({});
        toast.success("Account info updated successfully.");
      },
    });

  // update account handler
  const updateAccountHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First name is required!!";
    }

    if (!lastName) {
      validationErrors.lastName = "Last Name is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    updateAccountMutate({
      first_name: firstName,
      last_name: lastName,
      email,
    });
  };
  return (
    <main className="grid lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-black text-[28px] font-medium mb-2">
          Account Info
        </h2>
        <form onSubmit={updateAccountHandler}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First name *</label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last name *</label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email address *</label>
              <Input disabled value="admin@gmail.com" id="email" type="email" />
            </div>
            <div>
              <Button type="submit" loading={updateAccountLoading}>
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-black text-[28px] font-medium mb-2">
          Change Password
        </h2>
        <form onSubmit={changePasswordHandler}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="currentPass">Current password</label>
              <Input
                id="currentPass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Error>{errors?.password}</Error>
            <div className="flex flex-col gap-2">
              <label htmlFor="newPass">New password</label>
              <Input
                id="newPass"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <Error>{errors?.newPassowrd}</Error>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmNewPass">Confirm new password</label>
              <Input
                id="confirmNewPass"
                type="password"
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
              />
            </div>
            <Error>{errors?.newConfirmPassword}</Error>
            <div>
              <Button type="submit" loading={changePasswordLoading}>
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditAccount;
