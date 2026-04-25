import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image className="mx-auto" src={logo} alt={logo} width={300} height={200} />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      {/* <p>Sunday,<span className="text-[#706F6F]"> November 27, 2025</span></p> */}
      <p className="font-semibold">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
