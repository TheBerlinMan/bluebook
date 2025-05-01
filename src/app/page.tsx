import Image from "next/image";
import { Card } from "@/components/ui/card";
import NewCustomerForm from "@/components/NewCustomerForm";
import CustomerList from "@/components/CustomerList";
export default function Home() {
  return (
    <div className="max-w-sm p-4 mx-auto">
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
        {/* <div className="mx-auto">
          <Card className="px-4 mx-auto items-center">
            <p className="text-blue-800 font-normal">
              Each Blue Book is unique and hand made by me. If you'd like one,
              just sign up.
            </p>
            <button className="bg-blue-800 font-bold text-white px-4 py-2 rounded-md">
              Sign up
            </button>
            <p className="text-blue-800 font-normal">
              Blue Book was inspired by Moleskin pocket notebooks and the Blue
              Book Examination booklets from my childhood. Each one is hand made
              by me. If you'd like one, they're free. Just sign up for one on
              the waitlist.
            </p>
          </Card>
        </div> */}
      </div>
      {/* <Card className="px-4">
        <CustomerList />
      </Card> */}
      <NewCustomerForm />
    </div>
  );
}
