/* eslint-disable react/no-unknown-property */
import {  useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import logo from "../../assets/college.png";
const Navbar = () => {
 

  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };




  return (
    <nav className="bg-gray-300 text-black font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-40 h-24" src={logo} alt="" />
              {/* College */}
            </div>
            <div className="hidden md:block lg:ml-24">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/colleges"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      Colleges
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admission"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      Admission
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myCollege"
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : "default"
                      }
                    >
                      My College
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* search college */}
          
            {/* <div className="relative">
              <input
                className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute right-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div> */}

            {/* logout and profile */}
            <div className="flex items-center mb-3 lg:ml-80">
              <Link to="/userProfile">
                <div className="avatar placeholder mt-3 mr-2">
                  {user && (
                    <div className="bg-neutral-focus text-neutral-content rounded-full h-12 w-12">
                      <img
                        className="cursor-pointer"
                        title={user.displayName}
                        src={user?.photoURL}
                      />
                    </div>
                  )}
                </div>
              </Link>
              <div className="hidden sm:block">
                {user ? (
                  <Link to="/login">
                    <button
                      onClick={handleLogOut}
                      className="mt-3 relative flex items-center justify-center mr-4 gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:red-pink-500 font-bold hover:to-red-500"
                    >
                      LogOut
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="mt-3 relative flex items-center justify-center mr-4 gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="menu px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/colleges"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Colleges
              </NavLink>
            </li>
            {/* {user ? ( */}
            <li>
              <NavLink
                to="/admission"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Admission
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myCollege"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                My College sections
              </NavLink>
            </li>
          </ul>
          {user ? (
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
