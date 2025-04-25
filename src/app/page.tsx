
import Image from "next/image";
import { Card } from "@/components/ui/card";
import NewCustomerForm from "@/components/NewCustomerForm";

export default function Home() {
  

  return (
    <div className="p-6">
      <NewCustomerForm />
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

      
    </div>
  );
}
