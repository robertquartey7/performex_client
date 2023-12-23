import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/body/Main";
import { useSession } from "next-auth/react";
import Banner from "@/components/Banner";
import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getUser } from "@/api/user";
export default function Home() {
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (status === "authenticated") {
      getUser(session.user.id)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [status]);

  return (
    <div>
      {userInfo?.is_verified === false ? (
        <Banner
          icon={<ExclamationTriangleIcon className="h-7 w-7" />}
          message={"Email is not verified"}
          button={
            <button >
              <XCircleIcon className="h-7 w-7" />
            </button>
          }
        />
      ) : null}

      <Header user={userInfo} />
      <Main />
      <Footer />
      
    </div>

  );
}
