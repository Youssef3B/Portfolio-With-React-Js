import React from 'react'
import './Contact.css'
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';


const contact = () => {
  return (
    <section className='contact_section position-relative'>
        <div className='text-center'>
          <h5>CONTACT</h5>
          <h2>Contact With Me</h2>  
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="cards" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="900">
                        <div className="image_contact">
                            <img src="images/contact.png" alt="" className='img-fluid' />
                        </div>
                        <div className='down_card_contact'>
                            <h3 className='mt-4 text-white'>Youssef Ababou</h3>

                            <p className='mt-4'>Contact me</p>

                            <p className='mt-4'>I am available for freelance work. Connect with me via and call in to my account.</p>

                            <p className='mt-4'>Phone : <span className='text-white'>+2126-87-11-44-38</span></p>
                            <p>Email : <span className='text-white'>3b.youssef@gmail.com</span></p>

                            <p className='mt-4'>FIND WITH ME :</p>

                            <div className='mt-4'>
                            <a className='text-white' id='icone_socialmedia' href="https://www.facebook.com/youssef.ababou.71" target="_blank" rel="noopener noreferrer"><FiFacebook  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
              <a className='text-white' id='icone_socialmedia' href="https://www.facebook.com/youssef.ababou.71" target="_blank" rel="noopener noreferrer"><FiLinkedin  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
              <a className='text-white' id='icone_socialmedia' href="https://github.com/Youssef3B" target="_blank" rel="noopener noreferrer"><FiGithub  to='https://www.facebook.com/youssef.ababou.71' className='mx-3 mt-4 fs-4'/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1200">
                    <div className='cards2'>
                        <form action="">
                           <div className='row'>
                                <div className='col-lg-6 px-lg-3 py-2'>
                                    <label className='text-white' htmlFor="">YOUR NAME</label><br />
                                    <input className='w-100' type="text" />
                                </div>
                                <div className='col-lg-6 px-lg-3 py-2'>
                                    <label className='text-white' htmlFor="">PHONE NUMBER</label><br />
                                    <input className='w-100' type="text" />
                                </div>
                                <div className="col-lg-12 px-lg-3 py-2">
                                    <label className='text-white' htmlFor="">EMAIL</label><br />
                                    <input className='w-100' type="text" />
                                </div>
                                <div className="col-lg-12 px-lg-3 py-2">
                                    <label className='text-white' htmlFor="">SUBJECT</label><br />
                                    <input className='w-100' type="text" />
                                </div>
                                <div className="col-lg-12 px-lg-3 py-2">
                                    <label className='text-white' htmlFor="">YOUR MESSAGE</label><br />
                                    <textarea className='w-100' name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <button>Send Message</button>
                            </div>                            
                           
                            
                        </form>
                    </div>
              </div>
                
            </div>
        </div>
       

    </section>
  )
}

export default contact
