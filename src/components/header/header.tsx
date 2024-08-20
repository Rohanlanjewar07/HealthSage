"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-500 md:order-1">
            <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li
                className={clsx("md:px-8 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/dashboard",
                })}
              >
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li
                className={clsx("md:px-8 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/dashboard/diagnose",
                })}
              >
                <Link href="/dashboard/diagnose">Diagnose</Link>
              </li>
              <li
                className={clsx("md:px-8 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/dashboard/history",
                })}
              >
                <Link href="/dashboard/history">History</Link>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3 bg-indigo-300 p-1 flex rounded-full align-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
