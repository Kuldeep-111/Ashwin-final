'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import EnquiryForm from '../common/form/EnquiryForm'

gsap.registerPlugin(ScrollTrigger)


const Overview = () => {
    const [open, setOpen] = useState(false);

  const sectionRef = useRef(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.overview-animate', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  return () => ctx.revert()
}, [])



  return (
    <section ref={sectionRef} className='py-[50px] md:py-[100px] bg-[#FEF7F0]'>
        <div className='px-[7%]'>
        <h2  className="overview-animate w-full max-w-[700px] mx-auto font-montserrat text-[32px] leading-[50px] font-normal tracking-[1px] capitalize text-[#F0801B] text-center">
  Home to India’s Most Iconic Residential Lifestyle Experience
</h2>

       <p className="w-[75%] mx-auto overview-animate font-montserrat my-[50px] text-[16px] leading-[25px] font-normal tracking-[1px] text-black text-center">
Edmont by Ashwin Sheth Group stands as a beacon of modern luxury in Kandivali West, covering an expansive 2.02 acres with three 51-story towers. This landmark development is designed to deliver sophistication and comfort at every level. Each residence at Edmont, from elegant 2 & 3 BHK apartments to panoramic views of Manori Creek and lush green surroundings, is crafted with impeccable attention to detail, offering a luxurious modern lifestyle experience. The project seamlessly blends contemporary design with future-forward luxury, making it one of the most sought-after addresses in Mumbai.
</p>

<button onClick={() => setOpen(true)} className="overview-animate font-montserrat text-[18px] pb-[5px] font-medium tracking-[1px] border-b border-[#0E4194] uppercase text-[#0E4194] text-center block w-fit mx-auto">
  Download Brochure
</button>

      </div>
      <EnquiryForm open={open} onClose={() => setOpen(false)} />
    </section>
  )
}

export default Overview
