import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

export default function SpeedDial() {
  const actions = [
    { icon: <FaInstagram />, label: "Instagram", href: '' },
    { icon: <FiFacebook />, label: "Facebook", href: '' },
    { icon: <FiYoutube />, label: "YouTube", href: '' },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: '' },
    { icon: <FaWhatsapp />, label: "Whatsapp", href: ' https://wa.me/+918058843190' },
    { icon: <IoMdCall />, label: "Call", href: '' },
  ];

  const [open, setOpen] = useState(true);

  return (
    // wrapper contains both button and actions so moving to actions keeps pointer "inside" this wrapper
    <div
      className="relative flex flex-col items-end z-50"
    >
      {/* Action Buttons (positioned above the main button) */}
      <div
        className={`absolute bottom-full right-0 mb-2 flex flex-col items-end space-y-2 transition-all duration-150
        `}
      >
        {actions.map((action) => (
          <Link href={action.href}>
            <Button
              key={action.label}
              size="icon"
              variant="secondary"
              className="rounded-full shadow-lg hover:cursor-pointer hover:scale-110"
              onClick={() => console.log(action.label)}
            >
              {action.icon}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
