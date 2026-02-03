"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import EnquiryForm from "@/components/website/common/form/EnquiryForm";
import { TransitionProvider } from "@/context/TransitionContext";
import Footer from "@/components/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SmoothScroll>
      {/* <TransitionProvider> */}
      {/* <Loader /> */}
      <Header />

      {/* Floating Enquiry Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed z-[9999] right-[-60px] top-[40%]
                   translate-x-[-50%] px-[30px] py-[10px]
                   rotate-[-90deg] origin-right
                   bg-[#1B4485] text-white rounded-sm"
      >
        Enquire Now
      </button>

      <EnquiryForm open={open} onClose={() => setOpen(false)} />

      <main>{children}</main>
      <Footer/>
      {/* </TransitionProvider> */}
    </SmoothScroll>
  );
}
