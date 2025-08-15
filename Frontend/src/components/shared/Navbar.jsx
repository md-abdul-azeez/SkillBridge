import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let user = false;
  return (
    <div className="bg-white flex items-center justify-between mx-auto max-w-7xl h-16">
      <div>
        <h1 className="text-2xl font-bold">
          Skill<span className="text-[#F83002]">Bridge</span>
        </h1>
      </div>
      <div className="flex items-center gap-12">
        <ul className="flex font-medium gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        {
          !user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="underline">Login</Button></Link>
              <Link to="/signup"><Button className="bg-[#6A38C2] text-white hover:bg-[#5B30A6] cursor-pointer">SignUp</Button></Link>
            </div>
          ) : (
            <Popover>
          <PopoverTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="flex gap-4">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div>
                <h4 className="font-medium">Mhd. Abdul Azeez</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-fit items-center gap-2 cursor-pointer">
                <User2></User2>
                <Button variant="link">Profile</Button>
              </div>
              <div className="flex w-fit items-center gap-2 cursor-pointer">
                <LogOut></LogOut>
                <Button variant="link">Logout</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
          )
        }
      </div>
    </div>
  );
};
export default Navbar;