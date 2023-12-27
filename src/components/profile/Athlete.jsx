import { createAthlete } from "@/api/profile";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Athlete({ userId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // handling submit

  function onSubmit({
    firstName,
    lastName,
    parentEmail,
    primarySport,
    country,
    dateOfBirth,
  }) {
    createAthlete({
      firstName,
      lastName,
      parentEmail,
      primarySport,
      userType: "ATHLETE",
      country,
      dateOfBirth,
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
        toast.error("Something went wrong");
      });
  }

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
            {...register("primarySport", { required: true })}
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
            id="country"
            placeholder="Your Country"
            className="border p-2 w-full rounded-lg py-4"
            {...register("country", { required: true })}
            aria-invalid={errors.country ? "true" : "false"}
          />
          {errors.country?.type === "required" && (
            <p role="alert" className="text-red-600">
              Your Country is required
            </p>
          )}
        </div>

        <div className="">
          <input
            type="date"
            id="dateOfBirth"
            placeholder="Your Date Of Birth"
            className="border p-2 w-full rounded-lg py-4"
            {...register("dateOfBirth", { required: true })}
            aria-invalid={errors.dateOfBirth ? "true" : "false"}
          />
          {errors.dateOfBirth?.type === "required" && (
            <p role="alert" className="text-red-600">
              Your Date Of Birth is required
            </p>
          )}
        </div>
        <div className="">
          <input
            type="text"
            id="parentEmail"
            placeholder="Parent Email"
            className="border p-2 w-full rounded-lg py-4"
            {...register("parentEmail", { required: true })}
            aria-invalid={errors.parentEmail ? "true" : "false"}
          />
          {errors.parentEmail?.type === "required" && (
            <p role="alert" className="text-red-600">
              Parent Emailis required
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

export default Athlete;
