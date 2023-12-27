import { createAthlete } from "@/api/profile";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
function Recruiter({ userId }) {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // function onSubmit(data) {
  //   console.log(data);
  //   // firstName,
  //   // lastName,
  //   // userType,
  //   // sport,
  //   // roleAtInstitution,

  // }

  function onSubmit({ firstName, lastName, sport, institution, role }) {
    createAthlete({
      firstName,
      lastName,
      sport,
      userType: "RECRUITER",
      roleAtInstitution: role,
      userId,
    })
      .then((res) => {
        if (res.response?.status === 409)
          return toast.error(res.response.data.message);
        if (res.response?.status === 404)
          return toast.error("profile not found");
        toast.success("profile completed");
        return router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }

  // return <div>inProgress</div>;
  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="border p-2 w-full rounded-lg py-4"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className="text-red-600">
              First Name is required
            </p>
          )}
        </div>

        <div className="">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="border p-2 w-full rounded-lg py-4"
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert" className="text-red-600">
              Last Name is required
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            id="sport"
            placeholder="Primary Sport"
            className="border p-2 w-full rounded-lg py-4"
            {...register("sport", { required: true })}
            aria-invalid={errors.sport ? "true" : "false"}
          />
          {errors.sport?.type === "required" && (
            <p role="alert" className="text-red-600">
              Primary sport is required
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            id="institution"
            placeholder="Institution"
            className="border p-2 w-full rounded-lg py-4"
            {...register("institution", { required: true })}
            aria-invalid={errors.institution ? "true" : "false"}
          />
          {errors.institution?.type === "required" && (
            <p role="alert" className="text-red-600">
              institution is required
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            id="role"
            placeholder="Role at institution"
            className="border p-2 w-full rounded-lg py-4"
            {...register("role", { required: true })}
            aria-invalid={errors.role ? "true" : "false"}
          />
          {errors.role?.type === "required" && (
            <p role="alert" className="text-red-600">
              Role at institution required
            </p>
          )}
        </div>

        <button
          className="block text-center p-2 border w-full mt-2 bg-green-900 text-white rounded hover:opacity-90 duration-100 delay-100"
          type="submit"
        >
          Go To Profile
        </button>
      </form>
    </div>
  );
}

export default Recruiter;
