import React from 'react'
import './Info.css'
import bg from "../images/BitcoinBg.jpg";


const Info = () => {
    const bgck = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    return ( 
        <>
            <div className='session1' style={bgck}>
                <div className='content-session1' >
                <h1>Bitcoin</h1>
                <a href=""><button></button></a>
                </div>
            </div>
        </>
     );
}
 
export default Info;