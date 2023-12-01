import Profile from "@/components/profile/Profile";
import React from "react";

function profile() {
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
