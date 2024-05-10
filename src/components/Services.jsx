import React from 'react'

const Services = () => {
  const services = [
    { 
      title: 'Custom Software Development', 
      description: 'We build bespoke software solutions tailored to your business needs.' 
    },
    { 
      title: 'Mobile App Development', 
      description: 'We design and develop mobile applications for both iOS and Android platforms.' 
    },
    { 
      title: 'Web Development', 
      description: 'We create responsive and user-friendly websites to help you reach a wider audience.' 
    },
    { 
      title: 'UI/UX Design', 
      description: 'We design intuitive and engaging user interfaces for a seamless user experience.' 
    },
    { 
      title: 'E-commerce Solutions', 
      description: 'We provide robust e-commerce solutions to help you sell your products online.' 
    },
    { 
      title: 'Maintenance & Support', 
      description: 'We offer ongoing maintenance and support to ensure your software runs smoothly.' 
    },
    // Add more services as needed
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services