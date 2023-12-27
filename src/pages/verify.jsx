import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { requestEmailVerification, verifyEmail } from "@/api/verify";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import { VerifiedEmail } from "@/components/verify/VerifiedEmail";
import { EmailNotVerified } from "@/components/verify/EmailNotVerified";

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
    
          if (res.response?.status === 404) {
            toast.error("user Not Found ");
            return;
          }
          if (res.response?.status === 500) {
            toast.error("something went wrong ");
            return;
          }
          if (!res.status === 200) {
            toast.error("something went wrong ");
            return;
          }
          setLoading(false);
          setEmailVerified(true);
          toast.success("Email Verified");
         
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
          setEmailVerified(false);
          setError(true);
        });
    } else {
      setEmailVerified(false);
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
    console.log(emailVerified);
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
