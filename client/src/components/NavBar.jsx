import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logOut, user } = userAuth();
  console.log(isAuthenticated);

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
                  to={"/"}
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link to={"/add-task"}>Add task</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
