import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({title,description,imgUrl,gitUrl}) => {
  return (
    
    <Col sm={6} md={4}>
      <a href={gitUrl}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="" />
        </div>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </a>
    </Col>
    
  )
}
