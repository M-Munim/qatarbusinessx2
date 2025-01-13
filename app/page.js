"use client";

import Accordion from '@/components/Accordian'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import ServiceCard from '@/components/ServiceCard'
import cardsData, { team, testimonials } from '@/data'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  

  return (
    <div className=''>
      <section
        className="w-full h-[800px] flex flex-wrap items-end justify-center px-4 relative"
        style={{
          backgroundImage: "url('/Hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=' text-white w-10/12 flex items-center justify-center flex-col text-center mb-14'>
          <h1 className=' font-bold text-7xl tracking-wider mb-4'>Empowering Your Financial Success Globally</h1>
          <h2 className=' text-3xl tracking-wider mb-4'>Empowering individuals and businesses worldwide with innovative financial solutions, expert guidance, and unwavering support to achieve lasting success in the global marketplace</h2>
          <Button text="Learn More" className="w-36 h-14 text-base font-bold bg-maroon text-white mx-auto sm:mx-0" />
        </div>
      </section>

      <section className="w-full pt-10 pb-28" id="service">
        <Heading text="Services" />
        <p className='text-3xl text-[#170F49] text-center -mt-4'>Our services are designed to deliver excellence and meet your every need.</p>
        <ServiceCard cards={cardsData} />
      </section>

      <section className="w-full pt-10 pb-20 bg-[#FAFAFA]" id="about">
        <Heading text="Why Choose us?" />
        <p className='text-3xl text-[#170F49] text-center -mt-4'>Choosing us means prioritizing quality, trust, and unmatched expertise.</p>
        <div className='flex items-center justify-center mx-auto gap-20 mt-5'>
          <div className='left flex items-center justify-center flex-col gap-4'>
            <Image src="/Group 1000001783.svg" alt="logo" width={100} height={100} className='w-[497px] h-[351px]' />
          </div>

          <div className='right py-10 flex items-start justify-between flex-col text-start mt-5'>
            <h1 className='text-[#292E3D] font-bold text-5xl leading-tight mb-3'>Reliable, Resilient, Ready <br />
              for Your Success</h1>

            <ul className='text-[#170F49] list-disc text-2xl pl-10'>
              <li>Global Expertise</li>
              <li>Reliable Support</li>
              <li>24/7 Accessibility</li>
              <li>Resilient Strategies</li>
              <li>Client-Centric Approach</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='w-full bg-white' id="testimonial">
        <Heading text="What people think about Us?" />
        <p className='text-3xl text-[#170F49] text-center -mt-4'>Discover what sets us apart through the voices of those we’ve served.</p>

        <div className="testimonial-container pb-10 mt-10 px-4 w-10/12 mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          onSlideChange={handleSlideChange}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-card w-[406px] h-[398px] rounded-[18px] p-5 mb-14 bg-[#FF37731A]"
              >
                <div className="flex flex-col items-stretch justify-between p-5 text-center text-[#333333]">
                  <p className="quote text-lg font-medium">
                    {testimonial.head}
                  </p>
                  <p className="mt-4 text-[17px] opacity-75 text-justify">{testimonial.quote}</p>
                  <div className="flex items-center flex-col gap-4 mt-6 text-center">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-[72px] h-[72px] rounded-full"
                    />
                    <div>
                      <p className="text-lg font-medium">{testimonial.name}</p>
                      <p className=" text-[17px] opacity-75">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>

      <section className='bg-[#FAFAFA] pt-5 pb-20'>
        <div className='mt-5'>
          <Heading text="Our Team" />
          <p className='text-3xl text-[#170F49] text-center -mt-4'>Our team is the backbone of our success, driven by passion and expertise.</p>
        </div>

        <div className='flex items-center justify-center flex-wrap gap-9 w-9/12 mx-auto mt-14'>
          {team.map((item, i) => (
            <div className='text-center mt-20' key={i}>
              <div className='w-[243px] h-[131px] bg-maroon rounded-[20px] relative'>
                <Image
                  src={item.image}
                  alt="team Img"
                  width={100}
                  height={100}
                  className="w-[209] h-[204px] mx-auto absolute bottom-0 left-5"
                />
              </div>
              <h2 className='font-bold text-[22px] mt-3'>{item.name}</h2>
              <p className=' font-[#170F49]'>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='w-full '>
        <div className='mt-5'>
          <Heading text="FAQ" />
          <p className='text-3xl text-[#170F49] text-center -mt-4'>Everything you need to know about us.</p>
        </div>

        <div className='w-11/12 mx-auto ' >
          <Accordion />
        </div>
      </section>

      <section className='w-full flex items-center flex-col justify-center mt-24 mb-32'>
        <div className='mt-5 text-center'>
          <h1 className='text-maroon text-5xl'><span className='font-semibold italic'>Sign up</span>  for Our Newsletter</h1>
          <p className='text-3xl text-[#170F49] text-center mt-1'>Sign up for our newsletter and stay updated.</p>
        </div>

        <div className='rounded-[20px] bg-yellow-500 h-24 w-7/12 relative mt-10'>
          <input type="email" placeholder="Enter your email" className='w-full h-24 rounded-[15px] px-5 shadow-lg absolute' />
          <button className='absolute right-5 w-[186px] h-[62px] bg-maroon text-white rounded-xl text-[22px] top-5'>Subscribe</button>
        </div>
      </section>
    </div>
  )
}

export default page