import Image from "next/image";
import { Card } from "@/components/ui/card";
import NewCustomerForm from "@/components/NewCustomerForm";
import CustomerList from "@/components/CustomerList";
export default function Home() {
  return (
    <div className="max-w-sm  py-8 px-4 mx-auto text-blue-800">
      <div className="">
        <div className="text-blue-800 text-2xl font-bold text-center mb-1">
          Order Form
        </div>
        <p className="text-blue-800 text-md font-medium mb-4 text-center font-thin">
          Each blue book is handmade and made to order. If you'd like one please
          submit some of your information below. They're free of charge.
        </p>
        <hr className="border-blue-800 border-0.5 mb-4" />

        <NewCustomerForm />

        {/* 
            <p className="text-blue-800 font-normal">
              Blue Book was inspired by Moleskin pocket notebooks and the Blue
              Book Examination booklets from my childhood. Each one is hand made
              by me. If you'd like one, they're free. Just sign up for one on
              the waitlist.
            </p>
        */}
      </div>
    </div>
  );
}
