import React from 'react';
const Projects = () =>{
    return(
        <>
            <div className="text-warning mt-4 mb-4  mx-5" style={{borderBottom:"1px solid white"}}>
                        <h1 id="skill_sec_heading" style={{fontWeight:"300"}}>Projects</h1>
                    </div>
                    <div className="container-fluid">
                                <div className="row">
                                <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading" >E-shop(E-commerce) This project will provide a online shopping of electronics products.</p>
                                               
                                             <p className="pb-4" id="education_sec_text">Accomplishment:<br />
                                                    For frontend developement i used <b>Html</b> + <b>Css</b> + <b>Bootstrap</b> + <b>Jquery </b>+<b>Ajax. </b>< br/>
                                                    For backend developement i used <b>Python</b> + <b>Django</b> + <b>Django rest</b> + <b>Mysql</b>+<b>Simple-Jwt for Authentication. </b>
                                                    <b>For online payments i used Razor pay payment gateway.</b>
                                                </p>                                            </div>
                                         </div>
                                    </div>

                                    {/* another sec */}

                                    <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading"  >Portfolio</p>
                                                
                                                <p className="pb-4" id="education_sec_text">Accomplishment:<br />
                                                    For frontend developement i used <b>Html</b> + <b>Css</b> + <b>Bootstrap</b> + <b>React js.</b>
                                                </p>
                                            </div>
                                         </div>
                                    </div>


                                    {/* another sec end */}


                                      


                                </div>

                        </div>
        </>
    );
}

export default Projects;