import React from 'react'
import myData from '../dataModels/myData';

function Home (props) {

  return (
    <div className='homePage'>
      <div className='home'>
      
        <div className='efaImage'>
          <img src = "images/efaImage.png" className='efaImage1' alt =''/>
        </div>

        <div className='efaInfo'>
            <div className='name'>
              <div className='name1'>Hi! I'am {myData.name}</div> 
              <img src ={myData.img1}className='efaIfo' alt =''/>
            </div>
            
            <div className='position'>
              <img src ={myData.img2}className='efaIfo' alt =''/> 
              <div className='position1 '>I am a {myData.position}.</div>
            </div>

            <div className='location'>
              <img src ={myData.img3}className='efaIfo' alt =''/>  
              <div className='location1 '>Located in {myData.location}.</div>
            </div>

            <div className='hobby'>
              <img src ={myData.img4}className='efaIfo' alt =''/>
              <div className='hobby1'> {myData.hobies} is my hobby</div>
            </div>

            <div className='fueled'>
              <img src ={myData.img5}className='efaIfo' alt =''/>
              <div className='fueled1'>{myData. fueled} is my Fuel!</div>
            </div>

            <div className='email'>
              <img src ={myData.img6}className='efaIfo' alt =''/>
              <div className='email1'> {myData.email} .</div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Home