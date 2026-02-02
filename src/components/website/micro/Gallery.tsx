"use client"
import React, { useState } from "react"
import CommonSlider from "./CommonSlider"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import useGsapReveal from '@/hooks/useGsapReveal'

const data = [
  { src: "/images/micro/gallery/1.jpg", alt: "image 1" },
  { src: "/images/micro/gallery/2.jpg", alt: "image 2" },
  { src: "/images/micro/gallery/3.jpg", alt: "image 3" },
  { src: "/images/micro/gallery/4.webp", alt: "image 4" },
  { src: "/images/micro/gallery/5.webp", alt: "image 5" },
  { src: "/images/micro/gallery/6.webp", alt: "image 6" },
]

const Gallery = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  useGsapReveal();

  return (
    <>
      <section className="bg-[#FEF7F0] pb-[50px] md:pb-[100px]">
        <h2 data-direction="bottom" className="reveal-text  text-[32px] leading-[50px] font-medium  tracking-[1px] capitalize text-[#F0801B] text-center">
          photos gallery
        </h2>

        <div className="mt-[50px]">
          <CommonSlider
            data={data}
            loop={true}
            slidesPerView={2.5}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2.5 },
            }}
            spaceBetween={0}
            renderItem={(item, i) => (
              <div
                className="relative cursor-pointer group h-[350px]"
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
