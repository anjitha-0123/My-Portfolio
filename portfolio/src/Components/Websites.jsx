import React from 'react'
import linedin from '../assets/images/LinkedIn.svg'
import github from '../assets/images/github.svg'
function Websites() {
  return (
    <div className="position-absolute top-4 end-0 m-3">
       <a href="https://linkedin.com/in/anjitha-t-v-966842200"> <img src={linedin} style={{width:'40px',height:'40px'}}></img></a> 
       <a href='https://github.com/anjitha-0123/anjitha-0123'><img src={github} style={{width:'40px',height:'40px'}}></img></a> 
    </div>
  )
}

export default Websites