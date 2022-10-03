import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import github from './github.png';
import '../App.css'




const Logo = () => {
  return (
    <>

      <div className='github-logo'>
        <img src={github} alt="github-logo" style={{
          width:'5%',
        
        }}/>
         <h1>GitHub Profile Finder</h1>
      </div>
    
        
       
        
        
      
    </>
  )
}

export default Logo