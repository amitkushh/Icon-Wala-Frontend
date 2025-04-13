import React from "react";
import InboxArrow from "@/icons/InboxArrow";
import RightArrow from "@/icons/RightArrow";
import Link from "next/link";

function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 bg-linear-65 from-purple-100 to-pink-500 mx-7 my-16 p-4 rounded-md md:w-96 lg:w-96">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <InboxArrow />
          </div>
          <div>
            <h1 className="text-2xl font-bold ">Login</h1>
          </div>
        </div>
        <form className="flex flex-col justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="py-2 pl-3 border-2 border-black rounded-full outline-2 outline-offset-2 outline-black md:w-full"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="py-2 pl-3 border-2 border-black rounded-full outline-2 outline-offset-2 outline-black md:w-full"
          />
          <button className="mt-5 text-semibold bg-linear-65 from-purple-400 to-pink-500 flex gap-2 rounded-full py-3 px-6 cursor-pointer hover:bg-linear-65 hover:from-pink-500 hover:to-purple-500">
            Login <RightArrow />{" "}
          </button>
          <span>
            If You have not an account{" "}
            <Link
              href="/signup"
              className="text-purple-950 font-semibold text-xl"
            >
              click here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default page;
