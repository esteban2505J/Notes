import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  /**
   * method to control the sending of the registration request
   */
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <>
      <div
        className="flex items-center justify-center h-screen
      "
      >
        <div className="max-w-md bg-[#002a47] p-10 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="username"
            />
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="email"
            />
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            <div className="flex items-center justify-center mt-3">
              <button
                type="submit"
                className="bg-[#1c1833] p-2 rounded-lg hover:bg-[#3d3e60]"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
