import React from 'react'

function Getintouch() {
  return (
    <div id='contact' className="container py-5">
      <h2 className="mb-4">Get in Touch</h2>
      <div className="d-flex flex-column gap-3">
        
        <a href="mailto:anjithatvijayan@gmail.com" className="text-decoration-none">
          <i className="bi bi-envelope-fill me-2 text-danger"></i>
          anjithatvijayan@gmail.com
        </a>
        
       
        
        <a href="tel:+919744890343" className="text-decoration-none">
          <i className="bi bi-telephone-fill me-2 text-success"></i>
          +91 97448 90343
        </a>
        
      </div>
    </div>
  )
}

export default Getintouch
