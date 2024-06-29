import React from 'react'

const NewsLetter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
    <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
      <h3 className="h3">Get Exclusive offers on your Email </h3>
      <h4 className='upper'>Subscribe to our newsletter and stay upto date</h4>
      <div className="flexBetween rounded-full ring-1">
        <input type="email" placeholder="Your email address" className="w-full bg-transparent ml-7 border-none outline-0 regular-16 " />
        <button className='btn_dark_rounded'>Subscribe</button>
        </div>
    </div>
    </section>
  )
}

export default NewsLetter
