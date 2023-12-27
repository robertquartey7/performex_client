import Link from "next/link";
import { useForm } from "react-hook-form";
import { register as SignUp } from "../../api/auth";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

function Register() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // handling submit
  function onSubmit({ email, password }) {
    SignUp(email, password)
      .then(async (res) => {
        if (res.response?.status === 409) {
          toast.error("Already have an account");
        }
        if (res.status === 201) {
          toast.success("Sign up Successfull");

          /* signing user after sign up */
          const login = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (login) {
            return router.push(`/profile?_id=${res.data.userId}`);
          }

          toast.error("something went wrong");
          return;

          // verified email
          // add the userId to the backend
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }

  // handling google auth
  // async function handleGoogleAuth() {
  //   console.log("google auth");
  //   signIn("google")
  //     .then((res) => {
  //       console.log("robert", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <div
      className="
      md:w-[60%]
      mx-auto
     "
    >
      <form
        className="m-5 p-10 flex flex-col gap-3 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <div className="mx-auto w-[40%]">
            <img src="./img/logo.svg" alt="" className="" />
            <p className="text-center font-medium h-full">
              Helping Althletes Reach Athletic Achievement World-Wide
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border p-2 w-full rounded-lg py-4"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-600">
              Email is required
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border p-2 w-full rounded-lg py-4"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-600">
              Password is required
            </p>
          )}
        </div>

        <button
          className="block text-center p-2 border w-full mt-2 bg-green-900 text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          Sign up
        </button>
        <div className=" flex justify-between items-center gap-10">
          <span className="h-[1px] w-full border-black bg-black"></span>
          <span>or</span>
          <span className="h-[1px] w-full  border-black bg-black"></span>
        </div>
        {/* <div
          className="flex justify-center items-center  gap-2 cursor-pointer hover:underline hover:text-gray-500 delay-150 transition-all"
          onClick={handleGoogleAuth}
        >
          <span>
            <img src="/img/google-logo.svg" alt="" className="h-8" />
          </span>
          <span>Sign In With Google</span>
        </div> */}
      </form>
      <div className="m-5 p-10 py-5 flex flex-col gap-5 border items-center">
        <span className="mr-1 text-gray-500"> Don't have an account</span>
        <Link href={"/login"}>
          <span className="border bg-green-900 rounded-full p-4 px-6 text-white ">
            Login
          </span>
        </Link>
      </div>

      <div className="text-gray-500 m-5 px-10 flex flex-col  items-center">
        <p>Contact Us:</p>
        <a href="mailto:contact@performexoffical.com">
          contact@performexoffical.com
        </a>
      </div>
    </div>
  );
}

export default Register;
