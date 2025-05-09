"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Info } from "lucide-react";
import React from "react";
import { CustomerFormData } from "@/types/Customer";
import { Card } from "@/components/ui/card";

const initialFormData: CustomerFormData = {
  firstName: "",
  lastName: "",
  email: "",
  address: {
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipcode: "",
  },
  isInternational: false,
  willPayShipping: false,
  message: "",
};

const NewCustomerForm = () => {
  const [formData, setFormData] = useState<CustomerFormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // require note for international shipping
    if (formData.isInternational && !formData.message?.trim()) {
      alert(
        "Please leave a note with your full mailing address for international shipping."
      );
      return;
    }

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      // include address only for domestic shipping
      ...(formData.isInternational ? {} : { address: formData.address }),
      domesticShipping: !formData.isInternational,
      willPayShipping: formData.willPayShipping,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Network error");
      }

      alert("Thanks! Your request has been submitted.");
      // reset form:
      setFormData(initialFormData);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Oops! Something went wrong.");
    }
  };
  return (
    <Card className="px-6 py-4 mb-4 text-blue-800 border border-blue-800 font-normal">
      <div id="modal-form" className="w-full">
        <form
          onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full"
      >
        {/* FIRST & LAST & EMAIL */}
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="flex flex-col">
              <label htmlFor="name" >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="border-2 border-gray-300 rounded-md p-2 w-full"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 border-gray-300 rounded-md p-2 w-full"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-300 rounded-md p-2 w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        {/* US SHIPPING? */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="us-shipping"
              checked={formData.isInternational}
              onChange={(e) =>
                setFormData({ ...formData, isInternational: e.target.checked })
              }
            />
            <label htmlFor="us-shipping" >
              Shipping outside of the United States?
            </label>
          </div>
        </div>

        {/* MAILING ADDRESS */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col">
              <label htmlFor="name" >
                Street Address
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="border-2 border-gray-300 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
                value={formData.address.streetAddress}
                disabled={formData.isInternational}
                required={!formData.isInternational}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      streetAddress: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" >
                Apt, Studio, etc.
              </label>
              <input
                type="text"
                placeholder="Apt, Studio, etc."
                className="border-2 border-gray-300 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
                value={formData.address.streetAddress2}
                disabled={formData.isInternational}
                required={!formData.isInternational}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      streetAddress2: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" >
              City
            </label>
            <input
              type="text"
              placeholder="City"
              className="border-2 border-gray-300 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
              value={formData.address.city}
              disabled={formData.isInternational}
              required={!formData.isInternational}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="name" >
                State
              </label>
              <input
                type="text"
                placeholder="State"
                className="border-2 border-gray-300 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
                value={formData.address.state}
                disabled={formData.isInternational}
                required={!formData.isInternational}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, state: e.target.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" >
                Zip Code
              </label>
              <input
                type="text"
                placeholder="Zip Code"
                className="border-2 border-gray-300 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
                value={formData.address.zipcode}
                disabled={formData.isInternational}
                required={!formData.isInternational}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, zipcode: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* COVER SHIPPING */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="cover-shipping"
              checked={formData.willPayShipping}
              onChange={(e) =>
                setFormData({ ...formData, willPayShipping: e.target.checked })
              }
            />
            <label htmlFor="name" >
              I'll pay for shipping
            </label>
          </div>
          {/* Mobile: use Popover for touch devices */}
          <div className="block sm:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Info size={16} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="max-w-[200px]">
                <p>
                  No pressure, but it would definitely be appreciated. If you
                  select yes, I'll reach out to you via email once I've
                  confirmed the shipping cost.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          {/* Desktop: tooltip on hover/focus */}
          <div className="hidden sm:block">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="p-1 hover:bg-gray-100 rounded-full touch-manipulation"
                >
                  <Info size={16} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[200px]">
                <p>
                  No pressure, but it would definitely be appreciated. If you
                  select yes, I'll reach out to you via email once I've
                  confirmed the shipping cost.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* COMMENTS */}
        <div className="flex flex-col">
          <label htmlFor="comments" >
            Leave a message
          </label>
          <textarea
            rows={3}
            id="comments"
            placeholder={
              formData.isInternational
                ? "Please write out your full mailing address for international shipping."
                : "How ya doin?"
            }
            className="border-2 border-gray-300 rounded-md p-2"
            required={formData.isInternational}
            value={formData.message ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="text-blue-800 px-4 py-2  mt-4 rounded-md font-bold cursor-pointer"
          style={{ backgroundColor: "var(--blue-book-blue)" }}
        >
          Submit
        </button>
      </form>

      {/* FOOTER */}
      
      </div>
    </Card>
  );
};

export default NewCustomerForm;
