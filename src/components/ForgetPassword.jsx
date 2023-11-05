import { requestReset } from "@/api/password";
import { getUser } from "@/api/user";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "react-toastify";

function ForgetPassword() {
  const emailRef = useRef();

  async function forgetPassword(e) {
    // input validation
    if (!emailRef?.current.value) {
      return toast.warn("Input is required!!");
    }
    // requesting for request password
    requestReset(emailRef?.current.value)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Please check your email for instructions");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="h-56 ">
        <img src="/img/logo.svg" alt="" className="h-full w-full" />
      </div>
      <div className="shadow border p-10 rounded mb-2 md:w-[60%]">
        <h1 className="font-bold text-2xl text-center mb-2">Forgot Password</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded-lg py-4 mb-2"
        />
        <div className="flex justify-between items-center gap-5">
          <span className="text-gray-500">
            know your password?
            <Link href={"/login"}>
              <span className="text-green-900 font-medium "> login</span>
            </Link>
          </span>

          <button
            className="border bg-green-900 rounded p-3 px-6 text-white"
            onClick={forgetPassword}
          >
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
