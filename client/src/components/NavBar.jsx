import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logOut, user } = userAuth();
  // console.log(isAuthenticated);

  return (
    <>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={"/"} className="text-2xl font-semibold">
          Tasks manager
        </Link>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li>Welcome {user.userName}</li>
              <li>
                <Link to={"/tasks"}>Tasks</Link>
              </li>
              <li>
                <Link
                  className="bg-red-500 px-2 py-2 rounded-lg"
                  to={"/"}
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link
                  to={"/add-task"}
                  className="bg-indigo-500 px-4 py-2 rounded-lg"
                >
                  Add task
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
