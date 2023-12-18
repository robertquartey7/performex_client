import Profile from "@/components/profile/Profile";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function profile() {
  const router = useRouter();
  const { data } = useSession();
  const userId = useSearchParams().get("_id");

  useEffect(() => {
    if (userId) {
      console.log(userId);
    } else {
      // router.push("/login");
    }
  }, [userId]);

  return (
    <>
      <div className="md:w-[70%] lg:w-[50%] border p-10 mx-auto">
        <div className="h-52">
          <img src="/img/logo.svg" alt="" className="h-full mx-auto" />
        </div>
        <h1 className="text-center font-medium text-xl">Onboarding</h1>
        <Profile />
      </div>
    </>
  );
}

export default profile;
