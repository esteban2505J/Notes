import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { sigIn, errors: loginErrors, isAuthenticated } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    sigIn(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] w-full items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Login</h1>
        </div>

        {loginErrors.map((error, i) => {
          return (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          );
        })}

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="E-mail"
          />
          {errors.email && <p className=" text-red-500">E-mail is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className=" text-red-500">Password is required</p>
          )}
          <div className="flex items-center justify-between  mt-5">
            <button
              type="submit"
              className="bg-[#d8478d] p-2 rounded-lg hover:bg-[#713662] hover:p-3 transform transition-all duration-100 justify-start"
            >
              Login
            </button>

            <p className="flex gap-x-4 justify-between">
              Don´t have an account?
              <Link to={"/register"} className="text-red-400">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
