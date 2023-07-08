import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { sigUp, isAuthenticated, errors: registerError } = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

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
            {registerError.map((error, i) => {
              return (
                <div className="bg-red-500 p-2 text-white" key={i}>
                  {error}
                </div>
              );
            })}
            <input
              type="text"
              {...register("userName", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="username"
            />
            {errors.userName && (
              <p className=" text-red-500">Username is required</p>
            )}

            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="email"
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
              <button
                type="submit"
                className="bg-[#d8478d] p-2 rounded-lg hover:bg-[#713662] hover:p-3 transform transition-all duration-100"
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
