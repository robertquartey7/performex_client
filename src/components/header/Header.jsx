import React from "react";
import Link from "next/link";
import logo from "../../../public/img/logo.jpg";
import Image from "next/image";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <nav className=" flex justify-between h-14 items-center ml-2 mr-2">
      <Link href="/">
        <Image
          src="/img/logo.jpg"
          width={30}
          height={5}
          alt="Picture of the author"
        />
      </Link>
      <div >
        <Link className="ml-2"  href="/">HOME</Link>
        <Link className="ml-2" href="/ourstory">OUR STORY</Link>
        <Link className="ml-2" href="/login">SIGN IN</Link>
        <Link className="ml-2" href="/register"><Button variant="contained">SIGN UP FOR FREE </Button>
</Link>
      </div>
    </nav>
  );
};

export default Header;
