import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-400 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>
            <ul className="md:flex gap-x-6 text-white">
              <li>
                <Link href="/lists/new">
                  <p>New List</p>
                </Link>
              </li>
              <li>
                <Link href="/lists">
                  <p>All Lists</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
            {/* <SignIn> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;