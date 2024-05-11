import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} LetShop. All rights reserved.</p>
        <div>
          <a href="#" className="mx-2">Privacy Policy</a>
          <a href="#" className="mx-2">Terms of Service</a>
          <a href="#" className="mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer