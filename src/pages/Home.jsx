import React,{useState} from 'react'
import datas from '../dataModels/datas';
// import receipt from './models/receipt';
function Home(props) {
const [data, setData] = useState()

 
  return (
    <div className='homePage'>
      {props.data.map((data)=>{
          return(
            <div>
            <div className='name'>Hi I'am{data.name}</div>
            <div className='position '>I am a {data.position}.</div>
            </div>
          )
        
      })}
    </div>
  )
}

export default Home


                    