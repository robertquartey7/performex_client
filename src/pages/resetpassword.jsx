import { resetPassword } from "@/api/password";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

function resetpssword() {
  const searchParams = useSearchParams();
  const [passwordChangeState, setPasswordChangeState] = useState(false);
  const [error, setError] = useState(false);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  // useEffect(() => {
  //   console.log(searchParams.get("code"));
  // }, [searchParams]);

  function handlePasswordReset() {
    if (confirmPasswordRef.current.value !== passwordRef.current.value)
      return toast.error("Password does not match");
    if (searchParams.get("code")) {
      resetPassword({
        token: searchParams.get("code"),
        password: confirmPasswordRef.current.value,
      })
        .then((res) => {
          toast.success("Password Reset Successful");
          console.log(res);
        })
        .catch((err) => {
          toast.error('something went wrong')
          console.log(err);
        });
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="shadow p-10 flex flex-col gap-2">
        <div className="h-56 ">
          <img src="/img/logo.svg" alt="" className="h-full w-full" />
        </div>
        <h1 className="font-bold text-2xl text-center">Reset Password</h1>
        <div>
          <input
            type="text"
            placeholder="New password"
            className="p-2 border rounded w-full"
            ref={passwordRef}
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="p-2 border rounded w-full"
            ref={confirmPasswordRef}
          />
        </div>
        <button
          className="w-full p-2 rounded bg-green-700"
          onClick={handlePasswordReset}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default resetpssword;
