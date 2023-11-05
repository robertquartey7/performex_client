import Link from "next/link";
import { useForm } from "react-hook-form";
import { register as SignUp } from "../../api/auth";
import { toast } from "react-toastify";
function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // handling submit
  function onSubmit({ email, password }) {
    SignUp(email, password)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Sign up Successfull");
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
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
        {/* <div>
          <span className="underline ">
            <Link href={"/forget"}>Forgot Password</Link>
          </span>
        </div> */}
        <button
          className="block text-center p-2 border w-full mt-2 bg-green-900 text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          Sign up
        </button>
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
