import React from "react";
import { useForm } from "react-hook-form";
function Recruiter() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    // firstName,
    // lastName,
    // userType,
    // sport,
    // roleAtInstitution,
  }
  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
