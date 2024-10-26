import React from 'react'
import instagram from '../images/instagram.png';
import facebook from '../images/facebook-app-symbol.png';
import github from '../images/github.png'

const Navbar = () => {

  const scrollToProject = function(){
    const projectComponent = document.querySelector('.project_component');
    projectComponent.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToAbout = function(){
    const projectComponent = document.querySelector('.about_component');
    projectComponent.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToContact = function(){
    const projectComponent = document.querySelector('.contact_component');
    projectComponent.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <div className='navbar_component'>
      <div className="navbar_box">
        <button onClick={scrollToProject} className="projects_btn">Projects</button>
        <button onClick={scrollToAbout} className="about_btn">About</button>
        <button onClick={scrollToContact} className="contact_btn">Contact</button>
      </div>
      <div className="navbar_box social_links_box">
        <button className="instagram_btn">
          <a target='_blank' href="https://www.instagram.com/_aakash_bansal/"><img src={instagram} alt="" /></a>
        </button>
        <button className="facebook_btn">
          <a target='_blank' href="https://www.facebook.com/akash.bansal.3998263/"><img src={facebook} alt="" /></a>
        </button>
        <button className="github_btn">
          <a target='_blank' href="https://github.com/akbansal765/"><img src={github} alt="" /></a>
        </button>
      </div>
    </div>
  )
}

export default Navbar
