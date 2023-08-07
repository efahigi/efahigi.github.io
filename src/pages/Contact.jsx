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
              Phone:<span>+4694076748</span>
            </h6>
          </div>
        </div>
      </div>
  );
}
export default Contact