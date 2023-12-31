import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { sigUp, isAuthenticated, errors: registerError } = userAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  /**
   * method to control the sending of the registration request
   */
  const onSubmit = handleSubmit(async (values) => {
    sigUp(values);
  });

  return (
    <>
      <div
        className="flex items-center justify-center h-screen
      "
      >
        <div className="max-w-md bg-[#386487] p-10 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30">
          <form onSubmit={onSubmit}>
            <div className="text-center mb-2">
              <h1 className="font-bold text-slate-200 text-2xl">Register</h1>
            </div>
            {registerError.map((error, i) => {
              return (
                <div className="bg-[#b00415] p-2 text-white" key={i}>
                  {error}
                </div>
              );
            })}
            <input
              type="text"
              {...register("userName", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Username"
            />
            {errors.userName && (
              <p className=" text-red-500">Username is required</p>
            )}

            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="E-mail"
            />
            {errors.email && (
              <p className=" text-red-500">E-mail is required</p>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className=" text-red-500">Password is required</p>
            )}
            <div className="flex items-center justify-center mt-5">
              <button type="submit" className="btn btn-active btn-secondary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
