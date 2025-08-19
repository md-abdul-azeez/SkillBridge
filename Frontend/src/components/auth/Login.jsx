import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Login = () => {

const [input, setInput] = useState({
  fullName: "", email: "", phoneNumber: "", password: "", role: "", file: ""
});

const changeEventHandler = (e) => {
  setInput(...input, [e.target.name: ])
}

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
        <h1 className="font-bold text-xl mb-5">Login</h1>
        <div className="my-2">
          <Label className="mb-3">Email</Label>
          <Input type="email" placeholder="username@provider.com" />
        </div>
        <div className="my-2">
          <Label className="mb-3">Password</Label>
          <Input type="password" placeholder="password" />
        </div>
        <div className="flex justify-between">
          <RadioGroup className="flex items-center my-2 gap-4">
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="student" />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="recruiter" />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="my-3 bg-blue-600 text-white cursor-pointer">Login</Button>
        <span className="mx-5">Don't have an account? <Link to="/signup" className="text-blue-500 mx-3">Signup</Link></span>
      </form>
    </div>
  );
};
export default Login;