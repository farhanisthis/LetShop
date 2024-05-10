import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formState.name && formState.email && formState.message) {
      alert('Form submitted successfully');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="p-10 bg-gray-100 flex flex-col sm:flex-row items-center justify-around">
      <div>
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl mb-8 w-[50vw] md:w-[30vw]">
          We'd love to hear from you! Whether you have a question about our product,
           need assistance, or just want to chat, don't hesitate to reach out.
        </p>
      </div>
<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-[80vw] sm:w-[20vw] md:min-w-[350px]">
        <label className="block text-lg font-semibold mb-2">Name</label>
        <input type="text" name="name" value={formState.name} onChange={handleInputChange} className="mb-6 p-2 w-full border border-gray-300 rounded" />
        <label className="block text-lg font-semibold mb-2">Email</label>
        <input type="email" name="email" value={formState.email} onChange={handleInputChange} className="mb-6 p-2 w-full border border-gray-300 rounded" />
        <label className="block text-lg font-semibold mb-2">Message</label>
        <textarea name="message" value={formState.message} onChange={handleInputChange} className="mb-6 p-2 w-full h-32 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
