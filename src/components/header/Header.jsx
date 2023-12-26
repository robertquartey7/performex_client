import React from "react";
import Link from "next/link";
import logo from "../../../public/img/logo.jpg";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = ({ user }) => {
  return (
    <nav className=" flex justify-between h-14 items-center ml-2 ">
      <Link href="/" className="">
        <Image
          src="/img/logo.jpg"
          width={30}
          height={5}
          alt="Picture of the author"
        />
      </Link>
      <div className="flex justify-between w-[50%]">
        <Link href="/">
          <span className="p-2 w-full ">HOME</span>
        </Link>
        <Link href="/ourstory">
          <span className="p-2 w-full "> OUR STORY</span>
        </Link>

        {!user && (
          <>
            <Link href="/login">
              <span className="p-2 w-full "> SIGN IN</span>
            </Link>
            <Link href="/register">
              <span className="p-2 w-full text-white bg-green-900">
                SIGN UP FOR FREE
              </span>
            </Link>
          </>
        )}
        {user && (
          <Link href="/">
            <span
              className="p-2 w-full text-white bg-green-900"
              onClick={() => signOut()}
            >
              Logout
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
