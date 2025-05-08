import React from 'react';
import canva from '../assets/images/Canva.svg'
import css from '../assets/images/CSS3.svg'
import docker from '../assets/images/Docker.svg'
import express from '../assets/images/Express.svg'
import figma from '../assets/images/Figma.svg'
import html from '../assets/images/HTML5.svg'
import js from '../assets/images/JavaScript.svg'
import mdb from '../assets/images/MongoDB.svg'
import nest from '../assets/images/Nest.js.svg'
import node from '../assets/images/Node.js.svg'
import react from '../assets/images/React.svg'
import tcss from '../assets/images/Tailwind CSS.svg'
import ts from '../assets/images/TypeScript.svg'
import exp from '../assets/images/exp.jpg'
 
function Skills() {
  return (
    <div id='Skills' className='bg-black placeholder-wave'>
      <h2 className='text-center text-danger '>Skills</h2>
      <div className="d-flex  flex-wrap justify-content-center gap-4 p-3   ">
      <img src={figma} alt="Figma" style={{ width: '80px', height: '80px' }}/>
      <img src={canva} alt="Canva" style={{ width: '80px', height: '80px' }} />
      <img src={html} alt="HTML" style={{ width: '80px', height: '80px' }}/>
      <img src={css} alt="CSS" style={{ width: '80px', height: '80px' }}/>
      <img src={tcss} alt="Tailwind CSS" style={{ width: '80px', height: '80px' }} />
      <img src={js} alt="JavaScript" style={{ width: '80px', height: '80px' }}/>
      <img src={ts} alt="TypeScript" style={{ width: '80px', height: '80px' }}/>
      <img src={node} alt="Node.js" style={{ width: '80px', height: '80px' }}/>
      <img src={nest} alt="Nest.js" style={{ width: '80px', height: '80px' }}/>
      <img src={exp} alt="Express.js" style={{ width: '80px', height: '80px' }}/>
      <img src={mdb} alt="MongoDB" style={{ width: '80px', height: '80px' }}/>
      <img src={react} alt="React.js" style={{ width: '80px', height: '80px' }} />
      <img src={docker} alt="Docker" style={{ width: '80px', height: '80px' }} />
    </div>
    </div>
  );
}

export default Skills;

