import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

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
            <Image sr/>
            <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
              <span className="text-3xl font-bold text-theme tracking-wide">Indian</span>
              <span className="text-3xl font-bold text-white-800">Stonex</span>
            </Link>



            {/* details  */}
            <div className="w-full pr-5">
              <span className="text-xs">Address : In Front of Post Office, near Truck Union, Vasundhara Nagar Manglana Road, Makrana Rajasthan. <br />Pin: 341505</span>
            </div>

            <div className="w-full pr-5 flex flex-col text-sm">
              <span>Call : +91 7014116801</span>
              <span>Email : indianstonexinfo@gmail.com</span>
            </div>



          </div>
          {/* links  */}
          <div className="flex flex-col gap-3 ">
            <h3 className=" text-xl">House Of Talks</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={"/About"}>About Us</Link>
              <Link href={""}>The Team</Link>
              <Link href={"/"}>Indian Stonex</Link>
              <Link href={""}>Our Clients</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" text-xl">Quick Links</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={"/marble-pooja-room-designs"}>
                Pooja Room
              </Link>
              <Link href={"/premium-marble-temple-for-home"}>
                Dream Temples
              </Link>
              <Link href={"/communal-temple-design"}>
                Communal Temples
              </Link>
              <Link href={"/AppointmentPage"}>
                Book appointment
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" text-xl">Legal</h3>
            <div className="flex text-sm flex-col gap-4">
              <Link href={"/"}>
                Terms & Conditions
              </Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookies Policy</Link>
              <Link href={"/"}>Disclaimer</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Need Help</h3>
            <div className="flex flex-col gap-4 text-sm">
              <Link href={"/"}>FAQs</Link>
              <Link href={""}>Call Us</Link>
              <Link href={""}>Email</Link>
            </div>
          </div>
        </div>
        {/* icons   */}
        <div className=" flex gap-5 pb-5 w-full justify-start">
          <a href="https://www.instagram.com/indian_stonex?igsh=dzA3aWpoNXF1dGVk" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          </a>

          <a href="https://www.facebook.com/share/1BEsC7YXEM/" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          </a>

          <a href="https://youtube.com/@indianstonex-c3i?si=Z1i5Ge1sLZyp7Tdo" target="_blank" rel="noopener noreferrer">
            <FiYoutube className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          </a>

          <a href="https://www.linkedin.com/in/indian-stonex-091ab1385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-7 w-7 hover:cursor-pointer hover:scale-110 duration-200" />
          </a>

        </div>
        {/* divider  */}
        <Separator className="w-full" />

        {/* Copyright section  */}
        <div className="flex justify-center items-center h-[5vh] ">
          © Indian Stonex Private Limited, 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
