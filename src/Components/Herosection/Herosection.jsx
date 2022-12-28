import React from 'react'
import './Herosection.css'
import Typical from 'react-typical'

const Herosection = () => {
  return (
    <section className='hero_section'>

    
    <div className="row  position-relative">
        <div className="d-flex justify-content-center">
          <div className='border_avatar'>
            
          </div>
          <img   id='avatar_hero' src="images/anime.jpg" alt="" className='img-fluid' />
        </div>
        <div className='hero_title text-center mt-5 text-white'>
          <h1 >Hi, I'm Youssef Ababou</h1>
          <span className='mt-5' id="iam">I am a</span>
          <Typical 
            steps={[" Designer", 2000, ' Full Stack Developer!', 2000]}
            loop={Infinity}
            wrapper="span"
          />
          
        </div>
          
          <a id='cv' href='files/ussef-cv.pdf' target='_blank'  className='hero_cv btn'>Download my CV</a>
                  
        
    </div>
    </section>
  )
}

export default Herosection
