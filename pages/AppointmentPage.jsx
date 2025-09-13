
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Store } from 'lucide-react';
import { MdOutlineTempleHindu } from "react-icons/md";


export default function AppointmentPage() {
  const [service, setService] = useState("store");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);

  const timeSlots = [
    "10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM",
    "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM",
    "4:00 PM", "4:45 PM", "5:30 PM", "6:15 PM", "7:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${service} on ${date.toDateString()} at ${time}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl tracking-[.1500rem] font-semibold text-center mb-8">
        BOOK AN APPOINTMENT NOW
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <Label>Full Name</Label>
            <Input required placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Contact Number</Label>
            <Input required type="tel" placeholder="Enter contact number" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>City</Label>
            <Input required placeholder="Enter city" />
          </div>
        </div>

        {/* Service Selection */}
        <RadioGroup value={service} onValueChange={(val) => setService(val)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={cn(
            "p-5 px-8 rounded-lg flex gap-4 items-center hover:cursor-pointer",
            service === "store" ? "border border-yellow-500 " : 'border '
          )}>
            <RadioGroupItem value="store" id="r1" className="
           border-yellow-500
           data-[state=checked]:bg-yellow-500
           data-[state=checked]:text-yellow-500
           data-[state=checked]:border-yellow-500
           "/>
            <Label htmlFor="r1" className="flex gap-3 hover:cursor-pointer">
              <Store className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg">Store Tour</span>
                <span className="text-sm font-extralight">45 minutes</span>
              </div>
            </Label>
          </div>

          <div className={cn(
            "p-5 px-8 rounded-lg flex gap-4 items-center hover:cursor-pointer",
            service === "customization" ? "border border-yellow-500 " : 'border '
          )}>
            <RadioGroupItem value="customization" id="r2" className="
           border-yellow-500
           data-[state=checked]:bg-yellow-500
           data-[state=checked]:text-yellow-500
           data-[state=checked]:border-yellow-500
           "/>
            <Label htmlFor="r2" className="flex gap-3 hover:cursor-pointer">
              <Store className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg">Temple Customization</span>
                <span className="text-sm font-extralight">1 hours 30 minutes</span>
              </div>
            </Label>
          </div>
        </RadioGroup>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Calendar */}
          <div className="flex flex-col justify-center items-center p-3">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mt-2 w-full"
            />
          </div>

          {/* Time Slots */}
          <div className="p-3">
            <Label>Select Time</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  type="button"
                  variant={time === slot ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setTime(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700">
            Book Appointment
          </Button>
        </div>
      </form>
    </div>
  );
}