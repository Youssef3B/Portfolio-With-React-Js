import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { BsLayers } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

import { RiMessage3Line } from 'react-icons/ri';
import { NavLink } from "react-router-dom";


const Navbarr = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div  className="">
        <Navbar bg="dark" id='nav' expand="lg" className='position-fixed'>
      <Container className=''>
        <Navbar.Brand href="/" className='mx-auto mt-4'>
         
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='ms-4 mt-3' id="basic-navbar-nav">
          <Nav className="me-auto">
          <div className='bg-avatar text-center'>
            <img src="images/anime.jpg" alt="" className='img-fluid' />
          </div>
          <div className='link_nav'>
            <NavLink to="/" className={({ isActive}) => `text-white mt-5 d-flex align-items-center fs-5 ${isActive ? 'active_navbar' : ''}`} ><AiOutlineHome className='mx-2' />HOME</NavLink>
            <NavLink to="features" className={({ isActive}) => `text-white mt-5 d-flex align-items-center fs-5 ${isActive ? 'active_navbar' : ''}`}><BsHandbag className='mx-2'/>FEATURES</NavLink>
            <NavLink to="portfolio" className={({ isActive}) => `text-white mt-5 d-flex align-items-center fs-5 ${isActive ? 'active_navbar' : ''}`}><BsLayers className='mx-2'/>PORTFOLIO</NavLink>
            <NavLink to="resume" className={({ isActive}) => `text-white mt-5 d-flex align-items-center fs-5 ${isActive ? 'active_navbar' : ''}`}><BsPeople className='mx-2'/>RESUME</NavLink>
            <NavLink to="contact" className={({ isActive}) => `text-white mt-5 d-flex align-items-center fs-5 ${isActive ? 'active_navbar' : ''}`}><RiMessage3Line className='mx-2'/>CONTACT</NavLink>
          </div>
          <div>
            <h4 className='text-white mt-5 fs-5 text-center m-3'>FIND WITH ME</h4>
            <div className='d-flex justify-content-space-around align-items-center text-white'>
              <a className='text-white' id='icone_socialmedia' href="https://www.facebook.com/youssef.ababou.71" target="_blank" rel="noopener noreferrer"><FiFacebook  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
              <a className='text-white' id='icone_socialmedia' href="https://www.facebook.com/youssef.ababou.71" target="_blank" rel="noopener noreferrer"><FiLinkedin  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
              <a className='text-white' id='icone_socialmedia' href="https://github.com/Youssef3B" target="_blank" rel="noopener noreferrer"><FiGithub  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
            </div>
          </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
        </div>
      </div>
    </div>
          
  )
}

export default Navbarr
