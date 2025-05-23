import React from 'react'
import deb from '../assets/images/deb.jpg';
import cba from '../assets/images/cba.jpg'

function Certifications() {
  return (
    <div id='Certifications'>
    <h3 className='ms-4'>Certifications</h3>
    <div className='d-flex gap-4 ms-4'>
        
        <div>
          <img src={deb} style={{ width: '300px', height: '440px' }}></img>
          <p className='fw-bold text-danger'>Developer Essentials for Blockchain</p>
          <p>Issued by Kerala Blockchain Academy</p>
        </div>
        <div>
            <img src={cba} style={{ width: '300px', height: '440px' }}></img>
            <p className='fw-bold text-danger'>Certified Blockchain Associate</p>
            <p> Issued by Kerala Blockchain Academy</p>

        </div>

    </div>
    </div>
  )
}

export default Certifications