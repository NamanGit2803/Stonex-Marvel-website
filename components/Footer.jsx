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
        <div className="grid grid-cols-2 gap-8 py-10 md:py-20 lg:grid-cols-5">
          {/* logo  */}
          <div className="flex flex-col col-span-2 sm:col-span-1 gap-3 justify-start items-start">
            <Link href='/' className=" w-full flex-col flex tracking-[.1600rem] leading-2 text-theme">
              <span className="text-2xl font-semibold">Indian</span>
              <span className="text-4xl font-semibold">Stonex</span>
            </Link>


            {/* details  */}
            <div className="w-full pr-5">
              <span className="text-xs">Address : First & Second Floor, TSA India, Mall 21, Mirza Ismail Road, Opposite Rajmandir Cinema, 5 Batti, C Scheme, Jaipur, Rajasthan 302001</span>
            </div>

            <div className="w-full pr-5 flex flex-col text-sm">
              <span>Call : +91 93193 74633</span>
              <span>Email : info@tilakstonearts.com</span>
            </div>



          </div>
          {/* links  */}
          <div className="flex flex-col gap-3 ">
            <h3 className=" text-xl">House Of Talks</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={""}>About Us</Link>
              <Link href={""}>The Team</Link>
              <Link href={""}>Artisans of Tilak</Link>
              <Link href={""}>
                Collaborations
              </Link>
              <Link href={""}>Our Clients</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" text-xl">Quick Links</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={""}>
                How it Works
              </Link>
              <Link href={"/marble-pooja-room-designs"}>
                Pooja Room
              </Link>
              <Link href={"/premium-marble-temple-for-home"}>
                Dream Temples
              </Link>
              <Link href={"/communal-temple-design"}>
                Communal Temples
              </Link>
              <Link href={"/marble-home-temple-international"}>
                TSA International
              </Link>
              <Link href={"/AppointmentPage"}>
                Book appointment
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" text-xl">Legal</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={""}>Corporate Info</Link>
              <Link href={"/"}>
                Terms & Conditions
              </Link>
              <Link href={""}>Privacy Policy</Link>
              <Link href={""}>Cookies Policy</Link>
              <Link href={""}>Disclaimer</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Need Help</h3>
            <div className="flex flex-col gap-4 text-sm">
              <Link href={""}>FAQs</Link>
              <Link href={""}>Stores</Link>
              <Link href={""}>Call Us</Link>
              <Link href={""}>Email</Link>
            </div>
          </div>
        </div>
        {/* icons   */}
        <div className=" flex gap-5 pb-5 w-full justify-start">
          <FaInstagram className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          <FiFacebook className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          <FiYoutube className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          <FaLinkedinIn className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
        </div>
        {/* divider  */}
        <Separator className="w-full" />

        {/* Copyright section  */}
        <div className="flex justify-center items-center h-[5vh] text-theme">
          © Indian Stonex Private Limited, 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
