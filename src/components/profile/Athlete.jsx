import React from "react";
import { useForm } from "react-hook-form";

function Athlete() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // handling submit
  function onSubmit() {}
  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} >
        <div className="">
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            className="border p-2 w-full rounded-lg py-4"
            {...register("firstname", { required: true })}
            aria-invalid={errors.firstname ? "true" : "false"}
          />
          {errors.firstname?.type === "required" && (
            <p role="alert" className="text-red-600">
              First Name is required
            </p>
          )}
        </div>

        <div className="">
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            className="border p-2 w-full rounded-lg py-4"
            {...register("lastname", { required: true })}
            aria-invalid={errors.lastname ? "true" : "false"}
          />
          {errors.lastname?.type === "required" && (
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
