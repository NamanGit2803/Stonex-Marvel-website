import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function SpeedDial() {
  const actions = [
    { icon: <FaInstagram />, label: "Instagram", href: '' },
    { icon: <FiFacebook />, label: "Facebook", href: '' },
    { icon: <FiYoutube />, label: "YouTube", href: '' },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: '' },
    { icon: <FaWhatsapp />, label: "Whatsapp" , href: ' https://wa.me/+918058843190'}
  ];

  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  // clear timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    // wrapper contains both button and actions so moving to actions keeps pointer "inside" this wrapper
    <div
      className="relative flex flex-col items-end z-50"
      // close when mouse fully leaves wrapper
      onMouseLeave={() => {
        // small delay avoids flicker if user moves fast
        closeTimer.current = window.setTimeout(() => setOpen(false), 80);
      }}
      // if pointer re-enters, cancel closing
      onMouseEnter={() => {
        if (closeTimer.current) {
          window.clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
      }}
    >
      {/* Action Buttons (positioned above the main button) */}
      <div
        className={`absolute bottom-full right-0 mb-2 flex flex-col items-end space-y-2 transition-all duration-150
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none duration-400"}
        `}
      >
        {actions.map((action) => (
          <Link href={action.href}>
          <Button
            key={action.label}
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg"
            onClick={() => console.log(action.label)}
          >
            {action.icon}
          </Button>
          </Link>
        ))}
      </div>

      {/* Main Floating Button */}
      <div
        // IMPORTANT: only this onMouseEnter opens the speed dial
        onMouseEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
          }
          setOpen(true);
        }}
        // keyboard support
        onFocus={() => setOpen(true)}
      >
        <Button
          size="icon"
          className="cursor-pointer rounded-full h-10 w-10 bg-[#e4903d] hover:bg-[#c0660c] shadow-lg transition-transform duration-200"
        >
          <Plus size={22} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
