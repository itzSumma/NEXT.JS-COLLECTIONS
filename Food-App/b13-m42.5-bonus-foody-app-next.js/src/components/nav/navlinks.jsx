"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname(); // hook
  return (
    <div className="md:flex gap-10 items-center hidden">
      <Link className={pathname === "/" ? "underline" : ""} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/foods-cc" ? "underline" : ""}
        href="/foods-cc"
      >
        Foods CC
      </Link>
      <Link
        className={pathname === "/foods-sc" ? "underline" : ""}
        href="/foods-sc"
      >
        Foods SC
      </Link>
      <Link className={pathname === "/about" ? "underline" : ""} href="/about">
        About
      </Link>
      <Link
        className={pathname === "/contact" ? "underline" : ""}
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLink;
