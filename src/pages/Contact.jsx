import React from 'react'

function Contact() {
  return (
    <div className='contactPage'id="contact">
    
      <div className="container">
      <div className="physicalAddress">
              <h4 className="physical address">
                ADDRESS
              </h4>
              <p className="numberaddress">
                8175 meadow Rd<br />
                Dallas Texas 75231
              </p>
            </div>
        <div className="map">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="locationContainer">
            
            <div className="contactContainer">
              <h2 className="email">
                EMAIL:
              </h2>
              <a className="emailAdress">
                efawakene2005@email.com
              </a>
              <h2 className="phone">
                PHONE:
              </h2>
              <p className="phoneAddress">4694076748</p>
            </div>
          </div>
        </div>
        <form
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
        </form>
      </div>
    </div>
  );
}
export default Contact