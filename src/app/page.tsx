import Image from "next/image";
import { Card } from "@/components/ui/card";
import NewCustomerForm from "@/components/NewCustomerForm";
import CustomerList from "@/components/CustomerList";
export default function Home() {
  return (
    <div className="max-w-sm p-4 mx-auto text-blue-800">
      <div className="flex flex-col gap-4">
        <p className="text-blue-800 font-medium mt-4 mb- text-center">
          Each blue book is handmade and made to order. If you'd like one please
          submit some of your information below. They're free of charge.
        </p>

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
