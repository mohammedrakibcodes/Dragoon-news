"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import userAvatar from "@/assets/user.png";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/career", label: "Career" },
  ];

  return (
    <div className="container mx-auto mt-6 flex justify-between gap-4">
      <div />

      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-all duration-200 ${
                pathname === link.href
                  ? "font-semibold text-black border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt="user avatar"
          width={60}
          height={60}
          className="rounded-full"
        />

        <Link href="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
