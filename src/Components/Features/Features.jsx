import React, {useState} from 'react'
import './Features.css'
import { MdOutlineDesignServices } from 'react-icons/md';
import { MdOutlineWebAsset } from 'react-icons/md';
import { MdOutlineSpeed } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';

const designers = [
  {image: 'images/photoshop.png', name: 'Adobe Photoshop'},
  {image: 'images/illustrator.png', name: 'Adobe illustrator'},
  {image: 'images/premierePro.png', name: 'Adobe Premiere Pro'},
  {image: 'images/aftereffect.png', name: 'Adobe After Effect'},
  {image: 'images/sonyvegas.jpeg', name: 'Sony Vegas'},
  {image: 'images/cinema4d.png', name: 'Cinema 4d'},
]

const developers = [
  {image : 'images/html.png', name: 'HTML'},
  {image : 'images/css.png', name: 'CSS'},
  {image : 'images/javascript.png', name: 'Javascript'},
  {image : 'images/sass.png', name: 'Sass'},
  {image : 'images/bootstrap.png', name: 'Bootstrap'},
  {image : 'images/jquery.svg', name: 'Jquery'},
  {image : 'images/tailwind.png', name: 'Tailwind'},
  
  {image : 'images/react.png', name: 'React Js'},
]



const Features = () => {
  
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const handleClose = (modal) => {
    if(modal === 'firstModal') {
      setShowFirstModal(false)
    } else if(modal === 'secondModal') {
      setShowSecondModal(false)
    }
  };
  const handleShow = (modal) => 
  {
    if(modal === 'firstModal') {
      setShowFirstModal(true)
    } else if(modal === 'secondModal') {
      setShowSecondModal(true)
    }
  }

  

  
  return (
    <div className='features-section'>
      <div className='position-relative text-center'>
        <h5 data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="400">FEATURES</h5>
      <h2 data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="600" >What I Do</h2>
      <div className="container mx-auto mt-5">
      <div className="row d-flex">
      <div className="col-xl-4 col-lg-6 col-md-12">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="600" className="cards" variant="primary" onClick={() => handleShow('firstModal')}>
          <MdOutlineDesignServices id='icone_features'/> 
          <h3>Motion Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque quidem corporis ab fuga minus harum, earum iste reprehenderit consectetur.</p>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="cards"  onClick={() => handleShow('secondModal')}>
          <MdOutlineWebAsset id='icone_features'/> 
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque quidem corporis ab fuga minus harum, earum iste reprehenderit consectetur.</p>
        </div>
      </div>
      <div className="col-xl-4  col-lg-6 col-md-12">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1400" className="cards">
          <MdOutlineSpeed id='icone_features'/> 
          <h3>Excellent Web Host</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque quidem corporis ab fuga minus harum, earum iste reprehenderit consectetur.</p>
        </div>
      </div>
      </div>
     
      </div>
      
      </div>

      <Modal id="modal" show={showFirstModal} onHide={() => handleClose('firstModal')} centered size='xl' className='d-flex justify-content-center '>
        <Modal.Header closeButton className='bg-dark'>
           </Modal.Header>
           <div className="bg-dark container ">
           {designers.map(designer => 
            <div className='d-flex justify-content-between align-items-center' id='modal2'>
              <div className="">
                <img src={designer.image} alt="" className='img-fluid'/>
              </div>
              <div className="">
                <h5 className='text-white'>{designer.name}</h5>
              </div>
          </div>
            )}
              
 
            </div>
         
      </Modal>

      <Modal id="modal" show={showSecondModal} onHide={() => handleClose('secondModal')} centered size='xl' className='d-flex justify-content-center h-100'>
        <Modal.Header closeButton className='bg-dark'>
        </Modal.Header>
        <div className=" bg-dark modal2-container ">
           {developers.map(developer => 
            <div className='d-flex justify-content-between align-items-center' id='modal2'>
            <div className="">
              <img src={developer.image} alt="" className='img-fluid'/>
            </div>
            <div className="">
              <h5 className='text-white'>{developer.name}</h5>
            </div>
          </div>
            )}
              
 
            </div>
       
      
        
      </Modal>
      
    </div>
    
  )
}

export default Features