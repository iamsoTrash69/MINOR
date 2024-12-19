import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-column sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left */}
            <div>
                <img className='mb-5 w-40' src={assets.Logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Connecting mentors and mentees worldwide.Our platform provides a seamless way to find and connect with experienced mentors in various fields. Whether you're looking to advance your career, learn a new skill, or seek guidance, MentorConnect is here to help.
                </p>
            </div>
            {/* Middle */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* Right */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
        {/* Copyright Text (Done by DEEPANSHU) ] */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2024 MentorConnect. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer