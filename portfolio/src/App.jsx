import Aboutme from "./Components/Aboutme"
import Navbar from "./Components/Navbar"
import backImage from "../src/assets/images/background.png"
import Skills from "./Components/Skills"
import Project from "./Components/Project"
import Education from "./Components/Education"
import Certifications from "./Components/Certifications"
import Getintouch from "./Components/Getintouch"
import Websites from "./Components/Websites"

function App() {


  return (
    <div>
  <div className="position-fixed top-0 start-0 w-100 h-100" 
       style={{
         backgroundImage:`url(${backImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         zIndex: -1,
        }}></div>
    <div className="text-white position-relative" style={{zIndex:1}}>
    <Navbar></Navbar>
    <Websites></Websites>
  <div className="container py-5">
  <Aboutme></Aboutme>
  <Skills></Skills>
  <Project></Project> 
  <Education></Education> 
  <Certifications></Certifications>
  <Getintouch></Getintouch>
  </div>
  </div>
  </div>
  
  )
}

export default App
