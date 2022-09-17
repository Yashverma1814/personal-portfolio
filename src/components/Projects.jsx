import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import { Nav } from 'react-bootstrap'


export const Projects = () => {

    const projects = [
        {
            title:'Pepperfry Clone',
            description:'des',
            imgUrl:projImg1,
            gitUrl:'https://github.com/Vikram-amin/pepperfry-clone'
        },
        {
            title:'Sugar Cosmetics Clone',
            description:'des',
            imgUrl:projImg2,
            gitUrl:'https://github.com/shivling2510/sugar-cosmetics'
        },
        {
            title:'Medium Clone',
            description:'des',
            imgUrl:projImg3,
            gitUrl:'https://github.com/theatulanand/medium-clone'
        }
    ]
    
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="first" className='nav-pills mb-5 justify-content-center' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(<ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                                )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>Empty</Tab.Pane>
                            <Tab.Pane eventKey='third'>Empty</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="" />
        </section>
    )
}
