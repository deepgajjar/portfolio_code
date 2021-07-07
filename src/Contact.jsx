import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
   
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Contact = () =>{
    return(
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-sm-12 ">
    <div className="text-warning mt-4 mb-4  mx-5" style={{borderBottom:"1px solid white"}}>
                        <h1 id="skill_sec_heading" style={{fontWeight:"300"}}>Contact</h1>
    </div>
        <div className="container-fluid">

        <div className="row">
          
            
        <div className="col-sm-10" id="contact_page_contact_det_sec">
            <div id="contact_details_upper_div">
            <h2 id="contact_page_name">Deep Gajjar</h2>
            <ul style={{listStyle: "none"}} id="contact_page_ul">
                <li>
                    <p><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> kalol, Gujarat, India</p>
                </li>
                <li>
               
                    
                    <p> <span><FontAwesomeIcon icon={faPhone} /></span> +91 9327812963</p>
                </li>
                <li>
                
                    <p><span><FontAwesomeIcon icon={faEnvelope} /></span> deepgajjar.it@gmail.com</p>
                </li>
            </ul>
            </div>

        </div>
        


        </div>
        
        </div>

            
        
    </div>
    
    </div>
    </div>
    <div className="text-center"  id="contact_us_social_links">
        <ul>
            <li> <a href="https://github.com/deepgajjar" target="__blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/deep-gajjar-aa9122142/" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.facebook.com/deepgajjar.it" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.instagram.com/deep_it_98/" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a></li>

        </ul> 
   
    
    
    
</div>
    <div className="container-fluid" id="contact_quate_seciton">
        <div className='row'>
        <div className="col-sm-12" >
            <h1 id="skill_sec_heading" className="text-center text-white" style={{fontWeight:"300" }}>IF YOU DREAM IT, I CAN DESIGN IT</h1>
            </div>
        </div>
    </div>
   
    

        </>
 
   );
}
export default Contact;