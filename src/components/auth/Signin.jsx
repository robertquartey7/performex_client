import { login } from "@/api/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { getUser } from "@/api/user";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const { data } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // handling submit
  async function onSubmit({ email, password }) {
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login.ok) {
      //
      toast.success("login successfull");
    } else {
      toast.error("something went wrong");
    }
  }

  if (data) {
    getUser(data.user.id)
      .then(({ data }) => {
        if (!data.is_verified)
          return router.push(`/verified?status=${data.is_verified}`);
        if (!data.is_profile_completed) {
          return router.push(`/profile?_id=${data._id}`);
        } else {
          return router.push("/");
        }
        // console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
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
        <div>
          <span className="underline ">
            <Link href={"/forgot"}>Forgot Password</Link>
          </span>
        </div>
        <button
          className="block text-center p-2 border w-full mt-2 bg-green-900 text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="m-5 p-10 py-5 flex flex-col gap-5 border items-center">
        <span className="mr-1 text-gray-500"> Don't have an account</span>
        <Link href={"/register"}>
          <span className="border bg-green-900 rounded-full p-4 px-6 text-white ">
            sign up
          </span>
        </Link>
        <button></button>
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

export default Signin;

