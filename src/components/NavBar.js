import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/queuLogo.png";
import { TicketIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import temp from "../assets/logo/temp.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Search",
      to: "/search",
    },
    {
      name: "WanderMap",
      to: "/maps",
    },
    {
      name: "Community",
      to: "/community",
    },
  ];
  return (
    <>
      <div>
        <nav className="z-10 w-full fixed bg-slate-50 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-end w-full justify-between">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img
                      src={logo}
                      height={100}
                      width={220}
                      alt=""
                      objectFit="contain"
                    />
                  </div>
                  <div className="hidden md:block self-center">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {links.map((link, key) => (
                        <NavLink
                        key={key}
                          style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive
                                ? "underline"
                                : "none",
                              textDecorationColor: isActive
                                ? "rgb(130,71,229)"
                                : "",
                              textDecorationThickness: isActive ? "3px" : "0",
                              textUnderlineOffset: isActive ? "10px" : "0",
                              fontWeight: isActive ? "900" : "",
                              letterSpacing: isActive ? "0.05em" : "0.05em",
                            };
                          }}
                          to={link.to}
                          
                          className="text-black hover:underline hover:decoration-[#8247e5] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="self-center md:flex items-center hidden">
                  <NavLink to="/likes">
                    <HeartIcon className="h-9 w-9 text-[#8247e5]" />
                  </NavLink>

                  <NavLink to="/tickets">
                    <TicketIcon className="h-12 w-12 ml-8 text-[#8247e5]" />
                  </NavLink>

                  <NavLink to="/profile">
                    <img
                      src={temp}
                      alt=""
                      className="h-16 w-16 rounded-full ml-8 hover:shadow-2xl"
                    />
                  </NavLink>
                </div>
              </div>
              <div className="-mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200">
                  {links.map((link) => (
                    <NavLink
                      to={link.to}
                      className="ttext-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            }
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
