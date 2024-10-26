import React from 'react'
import rightArrow from '../images/right-arrow.png'

const Project = ({title, description, image, url}) => {

  const openProject = function(){
    window.open(url);
  }

  return (
    <div className='project_component'>
      <div className="project_box">
        <div className="project_description_box">
            <div>
                <p className="project_title">{title}.</p>
                <p className="project_description">{description}</p>
            </div>
            <button onClick={openProject} className="project_btn">
                <span><p>View Project</p></span>
                <img src={rightArrow} alt="" />
            </button>
        </div>
        <div className="project_image_box">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Project
