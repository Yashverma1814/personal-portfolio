import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    {/* <img src={logo} alt="Logo" /> */}
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a target={'_blank'} href="https://www.linkedin.com/in/yash-verma-436960213/"><img src={navIcon1} alt="" /></a>
                        <a target={'_blank'} href="https://www.facebook.com/profile.php?id=100023319321426"><img src={navIcon2} alt="" /></a>
                        <a target={'_blank'} href="https://www.instagram.com/_.yash.verma._/"><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
