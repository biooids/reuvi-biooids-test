import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="  flex justify-between items-center fixed z-50 w-full bg-black  lg:px-10 border-2 border-cyan-500">
      <Link href="/" className="flex items-center gap-1 ">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="reuvi logo"
          className="max-sm:size-10"
        />
      </Link>
      <div className=" flex-between gap-5 ">
        {/* clerk management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
