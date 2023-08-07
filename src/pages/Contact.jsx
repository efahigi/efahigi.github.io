import React from 'react'

function Contact() {
  return (
    <div className='contactPage'id="contact">

      <div className="map">
            <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3350.3818764575185!2d-96.7656783!3d32.888070 3!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9fe69c6b01d7%3A0x27736c77e247a52e!2sMeadows%20Crossing%20Apartments!5e0!3m2!1sen!2sus!4v1691378689781!5m2!1sen!2sus" ></iframe>
          </div>
    
      <div className="locationConntainer">
            <div className="physicalAddress">
              <h5 className="address">
                ADDRESS
              </h5>
              <p className="numberaddress">
                8175 meadow Rd<br />
                Dallas Texas 75231
              </p>
            </div>
            <div className="contactContainer">
            <h5 className="email">
              email: <span>efawakene2005@email.com</span>
              <a className="emailAddress"></a>
            </h5> 
            
            <h6 className="phoneAddress">
              Phone:<span>4694076748</span>
            </h6>
          </div>
          
        </div>

      
      




        {/* <form
          netlify
          name=""
          className="">
          <h2 className="">
            Hire Me
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form> */}
      </div>
   
  );
}
export default Contact