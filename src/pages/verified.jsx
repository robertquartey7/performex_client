import React, { useRef } from "react";
import { toast } from "react-toastify";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
function verified() {
  // check if user email is verified
  const router = useRouter();
  function handleBackClick() {
    return router.push("/");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <button
        className="absolute top-5 left-5 h-8 w-8"
        onClick={handleBackClick}
      >
        <ArrowLeftCircleIcon />
      </button>
      <EmailNotVerified />
    </div>
  );
}

export default verified;

function VerifiedEmail() {
  return <div></div>;
}

function EmailNotVerified() {
  const emailRef = useRef();

  function onSend() {
    const email = emailRef.current.value;
    if (!emailRef.current?.value) return toast.warning("Email is required!!!");

    toast.success("Please check your email for instructions");
  }

  return (
    <div className=" p-10 shadow">
      <div className="h-56 ">
        <img src="/img/logo.svg" alt="" className="h-full w-full" />
      </div>
      <h1 className="font-bold text-2xl">
        Enter your Email your verify your account
      </h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          ref={emailRef}
        />
      </div>
      <button className="w-full bg-green-700 p-2 mt-2 rounded" onClick={onSend}>
        Send
      </button>
    </div>
  );
}
