import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div style={{ backgroundColor: "#A4DCF9" }}
        className="font-bold text-blue-800 py-4 px-6 flex justify-between items-center drop-shadow-sm shadow-blue-800"
    >
      <Link href="/" className="text-2xl hover:text-blue-600 transition-colors">Blue Book</Link>
      <div className="flex gap-2">
        {/* <Link href="/signup">Sign Up</Link> */}
        <Link href="/waitlist">Waitlist</Link>
      </div>
    </div>
  );
};

export default Header;
