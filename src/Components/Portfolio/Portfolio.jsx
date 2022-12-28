import React from 'react'
import './Portfolio.css'

const projects = [
    { image: "images/1.jpg", type: "Web site", title: "ecommerce web site", languages: ["Html","Sass","Bootstrap"], link: "https://youssef3b.github.io/web-site-store/"},
    { image: "images/2.jpg", type: "web site", title: "Photfolio" , languages: ["Html","Sass","Bootstrap"], link: "https://youssef3b.github.io/My-first-boostrap-web-site/"},
    { image: "images/3.jpg", type: "Web site", title: "Trello" , languages: ["Html","Css"], link: "https://youssef3b.github.io/Trello-Responsive/"},
    { image: "images/4.jpg", type: "Web site", title: "Event part" , languages: ["Html","Css"], link: "https://youssef3b.github.io/My-First-Responsive-web-site/"},
    { image: "images/5.jpg", type: "app Web", title: "To Do list" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/Task-Project/"},
    { image: "images/6.jpg", type: "app web", title: "calculator" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/Calculator/"},
    { image: "images/7.jpg", type: "app web", title: "timer hit" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/HIIT-Timer/"},
    { image: "images/8.jpg", type: "app web", title: "get a joke" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/Random-Joke/"},
    { image: "images/9.jpg", type: "app web", title: "game divinite" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/devinette/"},
    { image: "images/10.jpg", type: "app web", title: "github finder" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/githubfinder/"},
    { image: "images/11.jpg", type: "app web", title: "Get a meme" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/Memes-app/"},
    { image: "images/12.jpg", type: "app web", title: "Find a country" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/COUNTRY/"},
    { image: "images/13.jpg", type: "app web", title: "cruds" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/CRUDS-project/"},
]

const Portfolio = () => {
  return (
    <div className='portfolio_section'>
        <div className='text-center position-relative'>
             <h5>VISIT MY PORTFOLIO</h5>
             <h2>My Portfolio</h2>
         <div className="container mx-auto">
            <div className="row">
                {projects.map(project => <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="900" className="col-xl-4 col-md-6">
                    <div className="cards mx-3">
                        <div className='image_portfolio'>
                           <img src={project.image} alt="" className='img-fluid'  /> 
                        </div>
                        <div className='description_card'>
                            <p>{project.type}</p>
                            <h3>{project.title}</h3>
                            <div  className='d-flex mt-3 mb-3 '>
                            {project.languages.map(lang => <div id='lang' className='language_programming'>{lang}</div>)}
                            </div>
                            <a id='btn_link' className='btn bg-danger text-white' href={project.link} rel="noreferrer" target="_blank">View The Project</a>
                        </div>
                    </div>
                </div>)}
            </div>
            </div>    

        </div>

    </div>
  )
}

export default Portfolio