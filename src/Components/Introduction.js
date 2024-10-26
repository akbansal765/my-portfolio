import React from 'react';
import akash from '../images/Akash2.jpg'
import down from '../images/down.png'

const Introduction = () => {

  const scrollToProject = function(){
    const projectComponent = document.querySelector('.project_component');
    projectComponent.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <div className='introduction_component'>
       <div className="intro_content_box">
           <div className="intro_box">
             <div className="intro_box_1">
                <p>Hey I'm</p>
                <div><img src={akash} alt="" /></div>
                <p>Akash</p>
             </div>
             <div className="intro_box_2">
              <p>Front-end Developer keen on building interactive web applications</p>
             </div>
           </div>
       </div>

       <div className="scroll_box">
        <button onClick={scrollToProject} className="scroll_btn">
          <p>Selected Projects</p>
          <img src={down} alt="" />
        </button>
       </div>
    </div>
  )
}

export default Introduction
