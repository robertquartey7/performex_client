import Loading from "@/components/Loading";
import Profile from "@/components/profile/Profile";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function profile() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    if (session) {
      setLoading(false)
    }
    if (!session && !loading) {
      router.push("/login");
    }
  }, [session])

  console.log(loading, session);


  if (loading) {
    return <Loading />
  }
  if (!loading && session) {
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

}

export default profile;
