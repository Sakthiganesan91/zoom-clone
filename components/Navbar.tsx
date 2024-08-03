"use client";
import { navbarLinks } from "@/constants/index";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <section className="py-6 mx-16 flex justify-between">
      <div className="flex">
        {navbarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={
                isActive
                  ? "bg-blue-1 text-white p-2 border"
                  : "text-white p-2 border" + " mx-2"
              }
            >
              <div className="flex items-center">
                <Image
                  src={link.image}
                  alt={link.label}
                  height={24}
                  width={24}
                />
                <p className="mx-1 font-semibold"> {link.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </section>
  );
};

export default Navbar;
