import { AiFillCaretDown } from "react-icons/ai";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex uppercase items-center w-full justify-center gap-x-1.5 text-[16px]  text-[#]">
          <div className="navLi">
            <p className="navlink">Pages</p>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right bg-[#fff] rounded-md dropdown shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/booking"
                  className={classNames(
                    active
                      ? "text-[#666565] uppercase"
                      : "uppercase text-[#666565]",
                    "block px-4 py-4 text-[15px]"
                  )}
                >
                  Booking
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/ourteam"
                  className={classNames(
                    active
                      ? "text-[#666565] uppercase"
                      : "uppercase text-[#666565]",
                    "block px-4 py-4 text-[15px]"
                  )}
                >
                  Our Team
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/testimonial"
                  className={classNames(
                    active
                      ? "text-[#666565] uppercase"
                      : "uppercase text-[#666565]",
                    "block px-4 py-4 text-[15px]"
                  )}
                >
                  Testimonial
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
