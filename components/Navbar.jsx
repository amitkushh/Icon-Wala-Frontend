import React from "react";
import Link from "next/link";
import RightArrow from "@/icons/RightArrow";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center py-6 px-7 md:py-4 md:px-20">
        <div>
          <Link href="/">
            <span className="text-2xl md:text-xl font-semibold">IconWala</span>
          </Link>
        </div>
        <nav className="md:flex justify-center items-center gap-20 hidden">
          <ul className="flex justify-center items-center gap-3">
            <Link href="/generate">
              <li>Generate icon</li>
            </Link>
            <Link href="/pricing">
              <li>Pricing</li>
            </Link>
          </ul>
          <div className="flex justify-center items-center gap-2">
            <Link href="/login">
              <button className="flex gap-2 border-pink-400 border-2 rounded-md py-2 px-4 cursor-pointer">
                Log In <RightArrow className="text-black"/>
              </button>
            </Link>
            <Link href="/signup">
              <button className="gap-2 flex rounded-md py-2 px-4 bg-pink-400 text-white cursor-pointer">
                Sign Up <RightArrow />
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
