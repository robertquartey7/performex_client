import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { requestEmailVerification, verifyEmail } from "@/api/verify";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";

function verified() {
  // check if user email is verified
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const searchParam = useSearchParams();
  const [emailVerified, setEmailVerified] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    if (searchParam.get("code")) {
      // if there is a token then set loading to
      verifyEmail(searchParam.get("code"))
        .then((res) => {
          setEmailVerified(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
          setError(true);
        });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [searchParam]);

  // BACK BUTTON
  function handleBackClick() {
    return router.push("/");
  }
  if (error) {
    return <div>Something is wrong</div>;
  }
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }


  if (!loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center relative">
        <button
          className="absolute top-5 left-5 h-8 w-8"
          onClick={handleBackClick}
        >
          <ArrowLeftCircleIcon />
        </button>
        {emailVerified && <VerifiedEmail />}
        {!emailVerified && <EmailNotVerified />}
      </div>
    );
  }
}

export default verified;
function VerifiedEmail() {
  return <div>verified</div>;
}

function EmailNotVerified() {
  const emailRef = useRef();

  function onSend() {
    const email = emailRef.current.value;
    if (!emailRef.current?.value) return toast.warning("Email is required!!!");

    requestEmailVerification(email)
      .then((res) => {
        console.log(res.data);
        toast.success("Please check your email for instructions");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
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
