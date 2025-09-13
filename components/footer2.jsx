import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex bg-[#0d0d0d] text-white p-3 px-6">
      <div className="grow">
        <div className="grid grid-cols-5 gap-2 py-20">
          {/* logo  */}
          <div className="flex flex-col gap-3 justify-around items-start">
            <div className="text-6xl">Stonex</div>
            {/* icons  */}
            <div className=" flex gap-5">
              <FaInstagram className="h-7 w-7 hover:cursor-pointer" />
              <FiFacebook className="h-7 w-7 hover:cursor-pointer"/>
              <FiYoutube className="h-7 w-7 hover:cursor-pointer"/>
              <FaLinkedinIn className="h-7 w-7 hover:cursor-pointer"/>
            </div>
          </div>
          {/* links  */}
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold text-xl">House Of Talks</h3>
            <div className="flex flex-col gap-3">
              <Link href={""}>Home</Link>
              <Link href={""}>About</Link>
              <Link href={""}>Contact</Link>
              <Link target="_blank" href={""}>
                Delivery Areas
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link target="_blank" href={""}>
                Terms
              </Link>
              <Link target="_blank" href={""}>
                Privacy
              </Link>
              <Link target="_blank" href={""}>
                Security
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl">Legal</h3>
            <div className="flex flex-col gap-3">
              <Link href={""}>Partner</Link>
              <Link target="_blank" href={""}>
                Delivery Partner
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl">Need Help</h3>
            <div className="flex flex-col gap-3">
              <Link href={""}>Partner</Link>
              <Link target="_blank" href={""}>
                Delivery Partner
              </Link>
            </div>
          </div>
        </div>
        {/* divider  */}
        <Separator className="w-full" />

        {/* Copyright section  */}
        <div className="flex justify-center items-center h-[5vh] text-[#9e9e9e]">
          © Stonex Private Limited, 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
