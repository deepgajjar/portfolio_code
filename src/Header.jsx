import React from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import deep from './image/deep.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faGreaterThan,faArrowRight} from '@fortawesome/free-solid-svg-icons';
const Header = () =>{
    let [btnstatus,setBtnStatus] = useState(false);
    let [pagename,setPagename] = useState(null);
    let hs = useHistory();
    useEffect(()=>{
        
        window.scrollTo(0, 0);
        if(window.innerWidth < 1100){
            let ddd = document.getElementById("main_webheader_upperdiv");
            let toggle_btn = document.getElementById("header_toggle_btn");
            ddd.classList.remove("toggler");
            setBtnStatus(true);
        }
    },[pagename]);
    
    const clickHandler = (e)=>{
        e.preventDefault();
        // window.scrollTo(0, 0);
        document.getElementsByClassName("active")[0].classList.remove("active");
        e.target.classList.add("active");
        let btntyp = e.target.getAttribute("data-btntype");

        setPagename(btntyp);
        let ddd = document.getElementById("main_webheader_upperdiv");
        let toggle_btn = document.getElementById("header_toggle_btn");
        console.log(btntyp);
        if(btntyp == 'home'){
            hs.push("/");
            
        }
        else if(btntyp == 'skills'){
            hs.push("/skills");
        }
        
        else if(btntyp == 'education'){
            hs.push("/education");
        }
        else if(btntyp == 'projects'){
            hs.push("/projects");
        }
        else if(btntyp == 'contact'){
            hs.push("/contact");
        }
        if(window.innerWidth < 1100){
            ddd.style.width = '0px';
            ddd.style.borderRight = "none";
            toggle_btn.style.transform='translateX(0px)';
            setBtnStatus(true);
        }
    }

    const HeaderToggleHandler = (e)=>{
        e.preventDefault();
        let ddd = document.getElementById("main_webheader_upperdiv");
        let toggle_btn = document.getElementById("header_toggle_btn");
        
        if(window.innerWidth < 1100){
            if(btnstatus){
                ddd.style.width = '230px';
                ddd.style.borderRight = "1px solid rgb(248, 199, 75)";
                toggle_btn.style.transform='translateX(230px)';
                setBtnStatus(false);
                
            }
            else{
                ddd.style.width = '0px';
                ddd.style.borderRight = "none";
                toggle_btn.style.transform='translateX(0px)';
                setBtnStatus(true);
            }
        }
        else{
            ddd.classList.toggle("toggler");
            if(btnstatus){
                toggle_btn.style.transform='translateX(230px)';
                setBtnStatus(false);
            }
            else{
                toggle_btn.style.transform='translateX(0px)';
                setBtnStatus(true);
            }
        }
        
        
       
        // 
        // toggle_btn.classList.toggle("toggle_btn_pos");

    }

    return(
        <>  
    <div className="container-fluid p-0">
        <div className="row no-gutters">
            <div className="col-sm-12">


    <div className="main_web_header_content bg-dark" id="main_webheader_upperdiv">
        <div className="" style={{zIndex:"10"}}>
            <div className="text-center bg-dark" style={{borderBottom:"1px solid #e0ffff"}}> 
                <img src={deep} style={{height:"100px" ,width:"100px",borderRadius: "50%",objectFit:"fill"}}  alt="" className="img-fluid mt-5 mb-2" />
                <h2 className="text-white " style={{fontFamily:"'Satisfy', cursive"}}>Deep Gajjar</h2>
                <p className="text-white" id="fullstack_head" style={{fontFamily:"'Satisfy', cursive"}} >Full Stack Web Developer</p>
            </div>
            <nav className="text-center mt-2 " >
            <a href="" className="nav-link active" data-btntype="home" onClick={clickHandler}>Home</a>
            <a href="" className="nav-link " data-btntype="skills" onClick={clickHandler}>Skills</a>
            <a href="" className="nav-link " data-btntype="education" onClick={clickHandler}>Education</a>
            <a href="" className="nav-link " data-btntype="projects" onClick={clickHandler}>Projects</a>
            <a href="" className="nav-link" data-btntype="contact" onClick={clickHandler}>Contact</a>
            </nav>
        </div>
        
    </div>
            <div>
            <button className="header_toggle_btn" id="header_toggle_btn" onClick={HeaderToggleHandler}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            </div>
        </div>
    </div>

  
        </>
    );
}
export default Header;


