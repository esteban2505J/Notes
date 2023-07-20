import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import { BiLogOut, BiPlusCircle, BiUser } from "react-icons/bi";

function NavBar() {
  const { isAuthenticated, logOut, user } = userAuth();
  // console.log(isAuthenticated);

  return (
    <>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={"/"} className="text-2xl font-semibold">
          Tasks manager
        </Link>
        <ul className="flex gap-x-3 items-center">
          {isAuthenticated ? (
            <>
              <div className="flex ">
                <BiUser className="m-1" />
                <li className>Welcome {user.userName}</li>
              </div>
              <li>
                <Link
                  to={"/tasks"}
                  className="hover:text-xl transition-all hover:text-slate-400"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  className="text-4xl"
                  to={"/"}
                  onClick={() => {
                    logOut();
                  }}
                >
                  <BiLogOut className="bg-red-500 rounded-md p-2 " />
                </Link>
              </li>
              <li>
                <Link to={"/add-task"} className="text-4xl">
                  <BiPlusCircle className="bg-indigo-500 p-1 rounded-lg text-white" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/register"}
                  className="bg-indigo-500 px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="bg-green-600 px-4 py-2 rounded-lg"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
