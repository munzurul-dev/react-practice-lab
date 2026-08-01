import { CircleX, Menu } from "lucide-react";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";

const Navbar = ({ navData }) => {
  const [open, setOpen] = useState(false);
  const links = navData.map((navLinkData, index) => (
    <NavLink navLinkData={navLinkData} key={index}></NavLink>
  ));
  return (
    <div className="flex justify-between items-center shadow-sm p-4">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black tracking-tight cursor-pointer select-none transition-transform duration-300 hover:scale-105">
        <span className="bg-linear-to-r from-emerald-500 via-green-600 to-teal-500 bg-clip-text text-transparent">
          Bik
        </span>
        <span className="text-orange-500">roy</span>
      </h2>
      <ul className="md:flex items-center gap-5 hidden font-bold ">{links}</ul>

      <div className={`
        flex items-center gap-2 relative ${open?"":"overflow-x-hidden"}
        `}>
        <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md font-bold cursor-pointer">
          SignUp
        </button>

        <span onClick={() => setOpen(!open)}>
          {open ? (
            <CircleX className="md:hidden bg-blue-100 rounded-2xl w-10 h-10 p-2 cursor-pointer"></CircleX>
          ) : (
            <Menu className="md:hidden bg-blue-100 rounded-2xl w-10 h-10 p-1 cursor-pointer"></Menu>
          )}
        </span>
        <ul
          className={`md:hidden bg-green-600  p-4 ${open ? " top-15 -right-2" : "-right-64 top-15"} rounded-2xl font-bold space-y-2 absolute duration-1000`}
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
