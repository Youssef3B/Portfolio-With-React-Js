import React from 'react';
import './Resume.css'
import { AiFillCaretRight } from 'react-icons/ai';

const Resume = () => {
  return (
    <section className='resume_section position-relative text-white'>

        <div className="container mx-auto mt-5 ">
            <div className="row mx-auto" id='bg-resume'>
                 <div className="col-lg-4">
                    <img src="images/left.jpg" alt="" className='img-fluid'/>
                 </div>
                 <div className="col-lg-8 p-5">
                    <h5 className='mb-4 text-danger fw-bold' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">ABOUT ME</h5>
                    <div className="row">
                        <div className="col-lg-6 me-5">
                            <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-out">Hello there! My name is Ababou Youssef. I am a Full Stack Developer, and I’m very passionate and dedicated to my work.</p>
                            <p className='mt-4 mb-4' data-aos="fade-right"
     data-aos-offset="700"
     data-aos-easing="ease-in-out">With 3 years experience as a professional a Developer web, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        </div>
                        <div className="col-lg-5">
                            <div className='right'>
                                <p className='fw-bold' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Name : </p>
                                <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">Youssef Ababou</p>
                                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='fw-bold'>Study</p>
                                <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">Institut Excel Development Multimedia</p>
                                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='fw-bold'>Adress : </p>
                                <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">Marrakech Massira 1 Qsou Asni N:170</p>
                                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='fw-bold'>Email : </p>
                                <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">3b.youssef@gmail.com</p>
                                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='fw-bold'>Phone : </p>
                                <p data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">+2126-87-11-44-38</p>
                            </div>
                        </div>
                        <div className="col-lg-6 me-5 mt-3">
                            <h4 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='text-danger fw-bold'>SERVICES</h4>
                            <ul>
                                <li data-aos="fade-up"
                                   data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Web Development</li>
                                <li data-aos="fade-up"
                                   data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Graphic Design</li>
                                <li data-aos="fade-up"
                                   data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Landing Page</li>
                                <li data-aos="fade-up"
                                   data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>On-Page SEO</li>
                                <li data-aos="fade-up"
                                   data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Web Hosting</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 mt-3">
                        <h4 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='text-danger fw-bold'>INTERESTS</h4>
                            <ul>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Painting & Drawing</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Music & Cinema</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Video Games</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Rain & Snow</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Football</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 me-5 mt-4">
                        <h4 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='text-danger fw-bold'>EDUCATION</h4>
                        <div className='education'>
                            <div className='d-flex align-items-center mt-4 '>
                                <p data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='bg-secondary p-3 rounded-2'>2018-2019</p> 
                            </div>
                            <div className='mt-4'>
                                <h5 data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom">Ibn Toumert Hight School</h5>
                                <p data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom">baccalauréat science de la vie et de la terre</p>
                            </div>
                            <div className='d-flex align-items-center mt-4 '>
                                <p data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='bg-secondary p-3 rounded-2'>2019-2021</p> 
                            </div>
                            <div className='mt-4'>
                                <h5 data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom">GROUPE DES INSTITUTS POLYTECHNIQUE(SITE4)</h5>
                                <p data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom">Diplômée de T.S.développement multimédia</p>
                            </div>
                            <div className='d-flex align-items-center mt-4 '>
                                <p  data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom"className='bg-secondary p-3 rounded-2'>2022-2023</p> 
                            </div>
                            <div className='mt-4'>
                                <h5 data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom">3w Academie</h5>
                                <p> data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom"Full Stack Developer Web</p>
                            </div>
                        </div>

                        </div>
                        <div className="col-lg-5 mt-4">
                            <h4 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='text-danger fw-bold'>LANGUAGE</h4>
                            <ul>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>English</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>French</li>
                                <li data-aos="fade-up"
                                  data-aos-anchor-placement="center-bottom" className='mt-3'><AiFillCaretRight/>Arabic</li>
                            </ul>
                        </div>
                        
                 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume
