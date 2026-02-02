'use client';

import { useState } from "react";
import EnquiryForm from "../common/form/EnquiryForm";


const Hero = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className='relative bg-white'>
            <div className="h-[calc(100vh-150px)] w-full relative bg-black">
                <video
                    src="/videos/micro/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-bottom"
                />
                 {/* GRADIENT OVERLAY */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #3F60A6 0%, rgba(155, 176, 221, 0) 27.5%)",
      }}
    />
            </div>

            {/* Info Bar Overlay (Image 2 content) */}
            <div data-direction="top" className="h-[150px] flex items-center justify-center reveal-text bg-[#FEF7F0] relative z-20 w-full  dark:bg-zinc-950 border-b border-black dark:border-zinc-800">
                <div className="container mx-auto px-[50px]">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

                        {/* Left: Project Details */}
                        <div className="space-y-1 max-w-2xl">
                            <div className="flex items-center gap-4">
                                <h2 className="text-[40px] font-normal tracking-[1px] capitalize text-black font-montserrat">
                                    Ashwin Sheth
                                </h2>

                                <div className="relative group inline-block">
                                    <button className="px-3 py-1 bg-[#E37D24] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-orange-600 transition-colors">
                                        View RERA
                                    </button>

                                    {/* Tooltip */}
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                  hidden group-hover:block
                  bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                        MahaRERA No. P51800053546
                                    </div>
                                </div>

                            </div>
                            <p className="font-montserrat text-[14px] font-normal tracking-[1px] uppercase text-black">
                                By Ashwin Sheth Group
                            </p>

                            <p className="font-montserrat text-[18px] font-normal tracking-[1px] capitalize text-black">
                                Edmont - Kandivali West Mumbai
                            </p>

                        </div>

                        {/* Right: Price & CTA */}
                        <div className="flex flex-col items-start lg:items-end gap-6 min-w-max text-black">
                            <div className="text-left lg:text-right">
                                <p className="text-2xl font-bold text-black">
                                   Starting at 2.16 CR*  <span className="font-light text-lg">| Home from 761 Sq. Ft.</span>
                                </p>
                                <p className="text-xs text-black text-right">Onwards*</p>
                            </div>
                            <button onClick={() => setOpen(true)} className="px-8 py-2 bg-[#1B4485] tracking-[2px] text-white font-semibold rounded-md shadow-lg hover:bg-blue-800 transition-all w-full lg:w-auto">
                                Contact Developer
                            </button>
                        </div>

                    </div>
                </div>
                {/* Extended intro text from Image 3 could go here in a new section, keeping Hero clean */}
            </div>

            <EnquiryForm open={open} onClose={() => setOpen(false)} />

        </section>
    )
}

export default Hero
