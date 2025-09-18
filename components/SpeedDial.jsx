import { Plus, Edit, Share2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function SpeedDial() {
  const actions = [
    { icon: <FaInstagram/>, label: "Edit", onClick: () => alert("Edit clicked") },
    { icon: <FiFacebook/>, label: "Share", onClick: () => alert("Share clicked") },
    { icon: <FiYoutube />, label: "Delete", onClick: () => alert("Delete clicked") },
    { icon: <FaLinkedinIn />, label: "Delete", onClick: () => alert("Delete clicked") },
  ];

  return (
    <div className=" flex flex-col items-end space-y-2 group z-100">
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-end space-y-2 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0`}
      >
        {actions.map((action) => (
          <div key={action.label} className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full shadow-lg"
              onClick={action.onClick}
            >
              {action.icon}
            </Button>
          </div>
        ))}
      </div>

      {/* Main Floating Button */}
      <Button
        size="icon"
        className="cursor-pointer rounded-full h-10 w-10 bg-[#e4903d] hover:bg-[#c0660c] shadow-lg transition-transform duration-300 group-hover:rotate-45"
      >
        <Plus size={22} className="text-white" />
      </Button>
    </div>
  );
}
