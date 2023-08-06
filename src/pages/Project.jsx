import {useState} from 'react'
import axios from 'axios'

function Project() {
  const [data,setData]=useState(null)

  const getData = async(area)=>{
      let res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=3ba0d5cb39744d22b5c51914232601&q=${area}&days=3&aqi=yes&alerts=yes`)

      console.log(res)
      setData(res.data)
  }
  return (
    <div className='projectPage'>
    
    </div>
  )
}

export default Project
