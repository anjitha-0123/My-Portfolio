import React from 'react';
import wonderlog from '../assets/images/wonderlog.png';
import quickcert from '../assets/images/quickcert.png';
import library from '../assets/images/library.png';
import quizapp from '../assets/images/quizapp.png'
import kbac from '../assets/images/kbac.png'

function Project() {
  return (
    <div id="Project" className="container py-5">
      <h1 className="text-white mb-4">PROJECTS</h1>
      
      <div className="row">
        {/* First Project */}
        <div className="col-md-4 mb-4 ">
          <div className="card h-100 bg-dark text-white ">
            <img src={wonderlog} className="card-img-top" alt="WonderLog" style={{ width: '400px', height: '280px' }} />
            <div className="card-body">
              <h4 className="card-title text-danger">Social-Inspired Goal-Tracking Platform</h4>
              <a href="https://github.com/anjitha-0123/DEB_Project-Wonderlog" className='text-decoration-none bg-light text-danger px-2 py-1 rounded d-inline-block mt-2' >Github</a>   
              <p className="card-text">
                Developed a Social inspired Goal tracking platform named <span className="fw-bold">WonderLog</span>. 
                It is an interactive platform that blends goal tracking with social engagement, allowing users to stay
                 inspired and motivated on their journey to achieving their dreams.
              </p>

              <div className='d-flex flex-wrap gap-2'>
              <img src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white" alt="HTML" />
              <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=TailwindCSS&logoColor=white" alt="TailwindCSS" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" alt="React" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
              <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="MongoDB" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
              </div>

            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 bg-dark text-white ">
            <img src={quickcert} className="card-img-top" alt="quickcert" style={{ width: '400px', height: '280px' }} />
            <div className="card-body">
              <h4 className="card-title text-danger">Certification Management Application</h4>
              <a href="https://github.com/anjitha-0123/QuickCert-CertificateApp" className='text-decoration-none bg-light text-danger px-2 py-1 rounded d-inline-block mt-2' >Github</a>   

              <p className="card-text">
                 BUild a certification management application named QuickCert.It allows users to sign up, log in, 
                log out, issue certificates, and search for issued certificates. 
              </p>
              
 
              <div className='d-flex flex-wrap gap-2'>
              <img src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white" alt="HTML" />
              <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=TailwindCSS&logoColor=white" alt="TailwindCSS" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" alt="React" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
              <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="MongoDB" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
              </div>

            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 bg-dark text-white ">
            <img src={library} className="card-img-top" alt="library" style={{ width: '400px', height: '280px' }}/>
            <div className="card-body">
              <h4 className="card-title text-danger">Library Management System</h4>
              <a href="#" className='text-decoration-none bg-light text-danger px-2 py-1 rounded d-inline-block mt-2' >Github</a>   

              <p className="card-text">
                Developed a Social inspired Goal tracking platform named <span className="fw-bold">WonderLog</span>. 
                It is an interactive platform that blends goal tracking with social engagement, allowing users
                 to stay inspired and motivated on their journey to achieving their dreams.
              </p>

              <div className='d-flex flex-wrap gap-2'>
              <img src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white" alt="HTML" />
              <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=TailwindCSS&logoColor=white" alt="TailwindCSS" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
              <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="MongoDB" />
              </div>

            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 bg-dark text-white ">
            <img src={quizapp} className="card-img-top" alt="quizapp" />
            <div className="card-body">
              <h4 className="card-title text-danger">Quiz Application</h4>
              <a href="https://github.com/anjitha-0123/Quiz_Application" className='text-decoration-none bg-light text-danger px-2 py-1 rounded d-inline-block mt-2' >Github</a>   

              <p className="card-text">
               Developed a  powerful and interactive mobile quiz application named<span className='fw-bold'>Quiz Hub</span> ,
                where admins can manage quizzes and users can attend them with ease!
              </p>

              <div className='d-flex flex-wrap gap-2'>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
              <img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
              <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
              </div>
              
            </div>
          </div>
        </div>

          {/* Fifth Project */}
          <div className="col-md-4 mb-4">
          <div className="card h-100 bg-dark text-white ">
            <img src={kbac} className="card-img-top" alt="kbac" />
            <div className="card-body">
              <h4 className="card-title text-danger">KBA Course App</h4>
              <a href="#" className='text-decoration-none bg-light text-danger px-2 py-1 rounded d-inline-block mt-2' >Github</a>   

              <p className="card-text">
                Developed a Social inspired Goal tracking platform named <span className="fw-bold">WonderLog</span>. It is an interactive platform that blends goal tracking with social engagement, allowing users to stay inspired and motivated on their journey to achieving their dreams.
              </p>

              <div className='d-flex flex-wrap gap-2'>
              <img src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white" alt="HTML" />
              <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=TailwindCSS&logoColor=white" alt="TailwindCSS" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" alt="React" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
              <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="MongoDB" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
