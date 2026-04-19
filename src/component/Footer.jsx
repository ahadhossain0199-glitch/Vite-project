import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300 pt-10">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

    {/* About */}
    <div>
      <h2 className="text-xl font-bold text-white mb-4">StudioX</h2>
      <p className="text-sm">
        We provide professional photography, videography, and creative design
        services to bring your ideas to life with quality and creativity.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-orange-400">Home</a></li>
        <li><a href="#" className="hover:text-orange-400">Services</a></li>
        <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
        <li><a href="#" className="hover:text-orange-400">About</a></li>
        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
      <ul className="space-y-2 text-sm">
        <li>Photography</li>
        <li>Videography</li>
        <li>Editing</li>
        <li>Branding</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
      <p className="text-sm">Email: info@studio.com</p>
      <p className="text-sm">Phone: +880 1234 567890</p>
      <p className="text-sm">Location: Dhaka, Bangladesh</p>
    </div>

  </div>

  {/* Bottom */}
  <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 py-4">
    © 2026 StudioX. All Rights Reserved.
  </div>
</footer>
    </>
  )
}

export default Footer
