import React from 'react'

const HelpPart = () => {
  return (
    <>
      <div className="help-section ">
  <h2 className="help-heading font-bold text-center mt-20">Need Help?</h2>
  <p className="help-description text-center font-semibold mt-10 mb-10">
    We’re here to assist you with all your studio-related needs. Whether you have questions about our services,
    booking process, pricing, or project details, our support team is always ready to help. You can reach out to
    us anytime for guidance, and we’ll make sure your experience is smooth and hassle-free.
  </p>
      </div>

    <div className="container">

        <div className='mb-20'>


  <div className="help-details flex gap-10">
    <div className="help-box w-400 border-2 px-10 py-10">
      <h4 className='font-bold'>📞 Contact Support</h4>
      <p>Get in touch with our team for quick assistance and inquiries.</p>
    </div>

    <div className="help-box w-400 border-2 px-10 py-10">
      <h4  className='font-bold'>📅 Booking Help</h4>
      <p>Need help scheduling a session? We’ll guide you step by step.</p>
    </div>

    <div className="help-box w-400 border-2 px-10 py-10">
      <h4  className='font-bold'>💰 Pricing Info</h4>
      <p>Learn more about our packages and choose what suits you best.</p>
    </div>

    <div className="help-box w-400 border-2 px-10 py-10">
      <h4  className='font-bold'>🎨 Project Support</h4>
      <p>Discuss your ideas and get expert advice for your project.</p>
    </div>
  </div>


        </div>

    </div>
    </>
  )
}

export default HelpPart



