import { requestEmailVerification } from "@/api/verify";
import { useRef } from "react";
import { toast } from "react-toastify";

export function EmailNotVerified() {
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
  