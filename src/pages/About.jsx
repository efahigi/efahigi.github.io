import React from 'react'

function About() {
  return (
    <div class ="aboutPage">
      <div className="AboutContainer ">
        <div className="myContainer">
          <div className='myName'>
            <h3>About Me</h3>  <br/>
            <h5>I love to learn new knowlege and skills.</h5>
          </div>
          <div className="aboutMe">
            <p >Software Engineer trained in Front End Web development, back-End Web development and Mobile application development with a skill set in HTML/CSS, Express, MongoDB, JavaScript (mainly, React, NodeJS) Swift and Objective C.  Experienced in tutoring students and guiding folks into becoming a better version of themselves. A patient and persistent professional with a strong analytical mindset complimented with critical thinking abilities to stay focused while exercising a strong attention to detail. </p>
          </div>

          <div className="aboutConnection">

            <div className="contact">
              <a href="/contact">
              Contact Me
              </a>
            </div>

            <div className="project">
              <a href="/project">
                 My Work
              </a>
            </div>
          </div>
        </div>
        <div className="myInformation">
         
        </div>
      </div>
    </div>
  );
}

export default About
