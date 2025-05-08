import React from 'react';
import { motion } from 'framer-motion';
import anjitha from '../assets/images/anjitha.jpeg';

function Aboutme() {
  return (
    <div  id='Aboutme' className="container mt-4">
      
      <div className="d-flex flex-column flex-md-row align-items-center">
        <motion.img
          src={anjitha}
          alt="Anjitha"
          className="img-fluid rounded me-md-4 mb-3 mb-md-0"
          style={{ width: '250px', height: '280px' }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div>
          <p className="fs-1 text-white fw-bold">Anjitha T V</p>
          <motion.p  
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}>
          Hi! I'm Anjitha T V — an enthusiastic engineering graduate with a strong foundation in full-stack web development
          and a passion for building scalable, user-friendly applications. I have hands-on experience working with modern technologies 
          like HTML, CSS,Tailwind CSS, BootStrap, JavaScript, React.js,React-native, Node.js, MongoDB, and frameworks such as Nest.js and Express. I’m also proficient in tools
          like Docker, Canva, and Figma for design and deployment. Beyond coding, I enjoy turning creative ideas into reality and love solving 
          real-world problems through technology. I’m eager to contribute to dynamic teams and continuously grow as a developer.Currently, 
          I’m looking for exciting opportunities where I can apply my skills, learn from industry experts, and make meaningful contributions to impactful projects.

          </motion.p>

          <a href="/Anjitha_Resume.pdf" download className="btn btn-primary"> Download Resume</a>

        </div>
      </div>
    </div>
  );
}

export default Aboutme;
