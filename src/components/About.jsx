import React from 'react'
import ProductImage from '../image.jpeg'
// import TeamImage from './path-to-your-team-image'

const About = () => {
  return (
    <div className="p-6 h-full grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className='flex-col justify-center'>
        <h1 className="text-3xl font-bold mb-4">About Our Product</h1>
        <p className="text-lg mb-4">
          Our product is designed with simplicity and efficiency in mind. We believe in creating solutions that are easy to use, intuitive, and user-friendly. Our team has spent countless hours perfecting every aspect of our product to ensure it meets your needs.
        </p>
        <img src={ProductImage} alt="Product" className="mt-4 rounded shadow-md h-96 " />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <p className="text-lg">
          Our team is composed of dedicated professionals who are passionate about what they do. From our developers to our customer service representatives, each team member plays a vital role in delivering a product that we're proud of. We're excited for you to get to know us and our product.
        </p>
        {/* <img src={TeamImage} alt="Team" className="mt-4 rounded shadow-md" /> */}
      </div>
    </div>
  )
}

export default About