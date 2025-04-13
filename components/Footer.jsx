import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-between items-center bg-linear-65 from-purple-500 to-pink-500 gap-5 p-5 text-white border-dotted border-t-3 px-7 md:flex-row md:px-20 md:gap-0">
        <div className="flex justify-center items-center gap-6">
          <Link href="/">
            <span className="text-2xl md:text-xl font-semibold">IconWala</span>
          </Link>
          <span>&copy; 2025 IconWala</span>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-2  lg:gap-5">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
            <Link href="/pricing">
              <li>Pricing</li>
            </Link>
            <Link href="/privacy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
