import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import deep from './image/deep.jpg';

const Home = () =>{
    

    return(
        <>
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-sm-12  mt-2">
                        <div className="text-center">
                            
                        <img src={deep} alt="profilepic" className="img-thumbnail mt-5 profilepic" />
                        
                        </div>
                        <div className="text-center mt-3 text-white" style={{fontSize:"13px"}}>
                        <span >I want to make things that make a difference.</span>
                        </div>


                    {/* 
                     */}
    <div className="mx-2 mx-sm-5">
        <h1 className="text-white mt-5 mt-sm-5 ml-2 font-weight-bold" style={{fontFamily: "'Satisfy', cursive"}}
        >Hello,</h1>
        <div className="text-white px-2 px-sm-4" style={{lineHeight: "32px"}}>
            <p style={{textIndent: "100px"}}>I am <b className="text-warning">Deep Gajjar</b> and i'm full stack web
         developer  I have a diverse set of skills,ranging from designing front end to developing backend. I offers a variety of web design and development services. i can provide best UI and easy to use website/web appications according to customer requirements. </p>
        <p>
        I am able to Developing front end website architectures
and designing user interactions on web pages. I am familiar with front end frameworks like bootstrap and
material UI. i am able to ensuring responsiveness of applications. I have Proficiency with fundamental front-end languages such as
HTML, CSS, and JavaScript and familiar  with JavaScript framework such as React and
library like jquery and i am familiar with php mvc frameworks like laravel and
codeIgniter and Familiar with python mvt frameworks django and django
rest framework and also familiar with python packages like
pandas,numpy,matplotlib,django channels
simple-Jwt,seaborn, scikit-learn. I am able to Design and develope APIs.  
        </p>

<h5>Current Focus : Css | Html | React | Laravel </h5>
        </div>
    </div>
    <div className="text-center">     
    <a href="{% url 'contact' %}" className="btn btn-outline-warning my-3 mr-5">Hire Me</a>
    <a href="{% url 'contact' %}" className="btn btn-outline-info my-3">Contact</a>
    </div>



                     {/*  */}
   



                    </div>
                </div>
            </div>
          
        </>
    );
}
export default Home;