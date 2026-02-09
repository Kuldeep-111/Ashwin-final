"use client"
import React, { useState } from "react"
import CommonSlider from "./CommonSlider"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import useGsapReveal from '@/hooks/useGsapReveal'

const data = [
  { src: "/images/micro/gallery/1.jpg", alt: "Swimming Pool " },
  { src: "/images/micro/gallery/2.jpg", alt: "Project Elevation" },
  { src: "/images/micro/gallery/3.jpg", alt: "Play Area & Park" },
  { src: "/images/micro/gallery/4.webp", alt: "Living Room" },
  { src: "/images/micro/gallery/5.webp", alt: "Master Bed Room" },
  { src: "/images/micro/gallery/6.webp", alt: "Bathroom" },
]

const Gallery = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  useGsapReveal();

  return (
    <>
      <section className="bg-[#FEF7F0] pb-[50px] md:pb-[100px]">
        <h2 data-direction="bottom" className="reveal-text w-full max-w-[800px] mx-auto  text-[32px] leading-[50px] font-medium  tracking-[1px] capitalize text-[#F0801B] text-center">
          Every Image Tells a Story of Elegance, Captured in Time.
        </h2>

        <div className="mt-[50px]">
          <CommonSlider
            data={data}
            loop={false}
            showProgress={true}
            slidesPerView={1.2}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.2 },
            }}
            spaceBetween={20}
            renderItem={(item, i) => (
              <div className="relative pb-[50px]">
              <div
                className="relative cursor-pointer group h-[550px]"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <span className="uppercase absolute bottom-[10px] left-[50px] bg-black/10 p-[10px]">Render Image</span>
              </div>
              <p className="text-center  w-fit absolute right-[35%] bottom-0 mt-[50px] uppercase text-[18px] font-medium tracking-[1px]  text-black">{item.alt}</p>
              </div>
            )}
          />
        </div>
      </section>

      {/* 🔥 Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={data}
      />
    </>
  )
}

export default Gallery
