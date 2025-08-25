import React from "react";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
        <div className="my-2 mb-3">
          <Label className="mb-3">Full Name</Label>
          <Input
            type="text"
            value={input.fullName}
            name="fullName"
            onChange={changeEventHandler}
            placeholder="Mohammed Abdul Azeez"
          />
        </div>
        <div className="my-2">
          <Label className="mb-3">Phone Number</Label>
          <Input
            type="number"
            value={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler}
            placeholder="+91 9301233280"
          />
        </div>
        <div className="my-2">
          <Label className="mb-3">Email</Label>
          <Input
            type="email"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            placeholder="username@provider.com"
          />
        </div>
        <div className="my-2">
          <Label className="mb-3">Password</Label>
          <Input
            type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            placeholder="password"
          />
        </div>
        <div className="flex justify-between">
          <RadioGroup className="flex items-center my-2 gap-4">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="">
          <Label className="mb-3">Profile</Label>
          <Input
            type="file"
            accept="image/*"
            className="cursor-pointer"
            onChange={changeFileHandler}
          />
        </div>
        <Button
          type="submit"
          className="my-3 bg-blue-600 text-white cursor-pointer"
        >
          Signup
        </Button>
        <span className="mx-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 mx-3">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Signup;
