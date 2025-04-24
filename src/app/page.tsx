import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
export default function Home() {
  return (
    <div className="p-6">
      <div className="flex gap-4">
        {/* <div className="mx-auto">
            <Image
              src="/cover.jpg"
              alt="Blue Book"
              width={300}
              height={300}
              className="rounded-md shadow-md"
            />
        </div> */}
        <div className="mx-auto max-w-lg">
          <Card className="px-4 mx-auto items-center">
            <p className="text-blue-800 font-normal">
              Every Blue Book is unique and hand made by me.
            </p>
            <p className="text-blue-800 font-normal">
              Want one? Just sign up for the waitlist.
            </p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md">
              Sign up
            </button>
          </Card>
          <Card className="px-4">
            <p className="text-blue-800 font-normal">
              Blue Book was inspired by Moleskin pocket notebooks and the Blue
              Book Examination booklets from my childhood. Each one is hand made
              by me. If you'd like one, they're free. Just sign up for one on
              the waitlist.
            </p>
          </Card>
        </div>
      </div>

      <div id="modal-form">
        <form className="w-[350px] flex flex-col gap-4">
          {/* HEADER */}
          <div>
            <p className="text-blue-800 font-normal">
              {/* move into the modal */}
              The blue book is free of charge, if you'd like one please submit
              your name and mailing address.
            </p>
          </div>

          {/* FIRST & LAST */}
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* US SHIPPING? */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="us-shipping" />
              <label htmlFor="us-shipping">Shipping outside of the United States?</label>
            </div>
          </div>

          {/* MAILING ADDRESS */}
          <div>
            <div className="flex flex-col">
              <label htmlFor="name">Street Address</label>
              <input
                type="text"
                placeholder="Street Address"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Street Address 2</label>
              <input
                type="text"
                placeholder="Apt, Studio, etc."
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">City</label>
              <input
                type="text"
                placeholder="City"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">State</label>
              <input
                type="text"
                placeholder="State"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* COVER SHIPPING */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="cover-shipping" />
              <label htmlFor="name">I'll pay for shipping</label>
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
