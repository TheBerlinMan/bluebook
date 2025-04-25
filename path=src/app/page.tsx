"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export default function Home() {
  // ─── Form state ───────────────────────────────────────────────────────────
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateField, setStateField] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isInternational, setIsInternational] = useState(false);
  const [willPayShipping, setWillPayShipping] = useState(false);
  const [message, setMessage] = useState("");

  // ─── Submit handler ────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      address: {
        streetAddress,
        streetAddress2,
        city,
        state: stateField,
        zipcode,
      },
      domesticShipping: !isInternational,
      willPayShipping,
      message,
    };

    try {
      const res = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network error");

      alert("Thanks! Your request has been submitted.");
      // reset form:
      setFirstName("");
      setLastName("");
      setStreetAddress("");
      setStreetAddress2("");
      setCity("");
      setStateField("");
      setZipcode("");
      setIsInternational(false);
      setWillPayShipping(false);
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="p-6">
      {/* ... your existing cards ... */}

      <div id="modal-form">
        <form
          className="w-[350px] flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* HEADER */}
          <div>
            <p className="text-blue-800 font-normal">
              The blue book is free of charge, if you'd like one please submit
              your name and mailing address.
            </p>
          </div>

          {/* FIRST & LAST */}
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          {/* US SHIPPING? */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="us-shipping"
                checked={isInternational}
                onChange={(e) => setIsInternational(e.target.checked)}
              />
              <label htmlFor="us-shipping">
                Shipping outside of the United States?
              </label>
            </div>
          </div>

          {/* MAILING ADDRESS */}
          <div>
            <div className="flex flex-col">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                id="streetAddress"
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Street Address"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="streetAddress2">Street Address 2</label>
              <input
                id="streetAddress2"
                type="text"
                value={streetAddress2}
                onChange={(e) => setStreetAddress2(e.target.value)}
                placeholder="Apt, Studio, etc."
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="stateField">State</label>
              <input
                id="stateField"
                type="text"
                value={stateField}
                onChange={(e) => setStateField(e.target.value)}
                placeholder="State"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="zipcode"
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="Zip Code"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          {/* COVER SHIPPING */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="cover-shipping"
                checked={willPayShipping}
                onChange={(e) => setWillPayShipping(e.target.checked)}
              />
              <label htmlFor="cover-shipping">I'll pay for shipping</label>
            </div>
            <Tooltip>
              <TooltipTrigger>
                <Info size={16} />
              </TooltipTrigger>
              <TooltipContent className="max-w-[200px]">
                <p>
                  You don't have to but if you'd like to help me out, that would
                  be great!
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* COMMENTS */}
          <div className="flex flex-col">
            <label htmlFor="comments">Leave me a note...</label>
            <textarea
              id="comments"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
} 