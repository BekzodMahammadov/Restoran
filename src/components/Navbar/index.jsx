import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TbToolsKitchen2 } from "react-icons/tb";
import Dropdown from "./Dropdown";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav
        className={`fixed w-full z-30 bg-transparent py-[16px]  ${
          !top && "mx-auto navbar_change "
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-5">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between lg:flex lg:justify-between lg:items-center  xl:justify-between xl:items-center">
              <div className="logo">
                <a
                  href="#"
                  className="text-[#FEA116] Nunito font-extrabold flex gap-[10px] items-center"
                >
                  <p className="text-[38px]">
                    <TbToolsKitchen2 />
                  </p>
                  <p className="text-[38px]"> Restoran</p>
                </a>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="flex space-x-4 lg:flex lg:items-center  xl:flex xl:items-center gap-5  text-[#fff] font-[600]">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff] uppercase text-[16px]  font-medium hover:text-[#FEA116] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff] uppercase text-[16px]  font-medium hover:text-[#FEA116] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/service"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff] uppercase text-[16px]  font-medium hover:text-[#FEA116] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Service
                  </NavLink>
                  <NavLink
                    to={"/menu"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff] uppercase text-[16px]  font-medium hover:text-[#FEA116] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Menu
                  </NavLink>
                  <Dropdown />
                  <NavLink
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff] uppercase text-[16px]  font-medium hover:text-[#FEA116] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Contact
                  </NavLink>
                  <button
                    onClick={() => {
                      navigate("/contact");
                    }}
                    className={`w-[165px] h-[42px] uppercase rounded bg-[#fba504] text-[#fff] font-[500] ${
                      !top && "bg-[#fba504] navbtn"
                    }`}
                  >
                    Book table
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
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
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0F172B] ">
              <NavLink
                to={"/"}
                className="text-[#fff]  uppercase  block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-[#fff]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
              <NavLink
                to={"/service"}
                className="text-[#fff]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                Service
              </NavLink>
              <NavLink
                to={"/project"}
                className="text-[#fff]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                Project
              </NavLink>

              <NavLink
                to={"/contact"}
                className="text-[#fff]   uppercase block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </NavLink>
              <button
                className={`w-[165px] h-[42px] uppercase rounded bg-[#fba504] text-[#fff] font-[500] ${
                  !top && "bg-[#fba504] navbtn"
                }`}
              >
                Book table
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
