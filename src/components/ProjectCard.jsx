import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({title,description,imgUrl,gitUrl}) => {
  return (
    
    <Col sm={6} md={4}>
      <a target={'_blank'} href={gitUrl}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="" />
        </div>
      </a>
      <div color='white'>
            <h4>{title}</h4>
            <span>{description}</span>
      </div>
    </Col>
    
  )
}
