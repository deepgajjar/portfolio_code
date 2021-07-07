import React from 'react';
import html5 from './image/language/html5.png';
import react from './image/language/react.png';
import css3 from './image/language/css3.png';
import sass from './image/language/sass.png';
import bootstrap from './image/language/bootstrap.png';
import materialize from './image/language/materialize.png';
import javascript from './image/language/javascript.png';
import jquery from './image/language/jquery.png';
import php from './image/language/php.png';
import python from './image/language/python.png';
import laravel from './image/language/laravel.png';
import codeigniter from './image/language/codeigniter.png';
import django from './image/language/django.png';
import drf from './image/language/drf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoffee,faPalette } from '@fortawesome/free-solid-svg-icons';
const Services = () =>{
    return(
    <>
        <div className="container-fluid p-0" >
            <div className="row no-gutters"  style={{ boxSizing:"border-box" }}>
                <div className="col-sm-12">
                    <div className="text-warning mt-4 mb-4  mx-5" style={{borderBottom:"1px solid white"}}>
                        <h1 id="skill_sec_heading" style={{fontWeight:"300"}}>Skills</h1>
                    </div>
                        <div id="skilbox" className="">
                            <p id="skil_main_heading">HTML</p>
                                <div className="container-fluid p-0">
                                        <div className="row no-gutters">
                                            <div className="col-md-3  text-center">
                                            <img src={html5}  id="language_img" alt="html" />
                                            <p className="" id="p_lang_head" style={{marginTop:"10px"}} >HTML 5</p>
                                            </div> 
                                            <div className="col-md-3  text-center">
                                            <img src={react}  id="language_img" alt="html" />
                                            <p className="" id="p_lang_head" style={{marginTop:"10px"}} >JSX</p>
                                        </div> 
                                </div>
                        </div>

                  
                    </div>
                        {/* css section start */}

                        <div id="skilbox" className="">
                            <p id="skil_main_heading">CSS</p>
                                <div className="container-fluid p-0">
                                        <div className="row no-gutters">
                                            <div className="col-md-3  text-center">
                                            <img src={css3}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >CSS 3</p>
                                            </div> 
                                            <div className="col-md-3  text-center">
                                            <img src={sass}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >SASS</p>
                                        </div> 
                                        <div className="col-md-3  text-center">
                                            <img src={bootstrap}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Bootstrap</p>
                                            </div>
                                            <div className="col-md-3  text-center">
                                            <img src={materialize}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Materialize</p>
                                            </div>
                                </div>
                        </div>

                  
                    </div>

                        {/* css section end */}


                        {/* java script sectio start */}

                        <div id="skilbox" className="">
                            <p id="skil_main_heading">Javascript</p>
                                <div className="container-fluid p-0">
                                        <div className="row no-gutters">
                                            <div className="col-md-3 text-center">
                                            <img src={javascript}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Javascript</p>
                                            </div> 
                                            <div className="col-md-3  text-center">
                                            <img src={react}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Rect Js</p>
                                        </div> 
                                        <div className="col-md-3  text-center">
                                            <img src={jquery}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >jQuery</p>
                                        </div> 
                                </div>
                        </div>

                  
                    </div>


                        {/* javascript section end */}

                    {/* backend section start */}


                    <div id="skilbox" className="">
                            <p id="skil_main_heading">Backend</p>
                                <div className="container-fluid p-0 ">
                                        <div className="row no-gutters">
                                            <div className="col-md-3  text-center">
                                            <img src={php}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >PHP</p>
                                            </div> 
                                            <div className="col-md-3  text-center">
                                            <img src={laravel}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Larevel</p>
                                            </div> 
                                        <div className="col-md-3  text-center">
                                            <img src={codeigniter}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Codeigniter</p>
                                        </div> 

                                        <div className="col-md-3   text-center">
                                            <img src={python}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Python</p>
                                        </div> 
                                        <div className="col-md-3   text-center">
                                            <img src={django}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Django</p>
                                        </div> 
                                        <div className="col-md-3   text-center">
                                            <img src={django}  id="language_img" alt="html" />
                                            <p classNam="pl-5" id="p_lang_head" style={{marginTop:"10px"}} >Django Rest Framework</p>
                                        </div> 
                                </div>
                        </div>

                  
                    </div>



                    {/* backend section end */}
                </div>

            </div>
        </div>

</>
    );
}
export default Services