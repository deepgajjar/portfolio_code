import React from 'react';
import gtu from './image/gtu.png';
import gu from './image/gu.png';
import redhat from './image/redhat.png';
import rhce from './image/rhce.jpg';
import rhcsa from './image/rhcsa.jpg';
const Education = ()=>{
    return(
        <>
        <div className="container-fluid p-0" >
            <div className="row no-gutters"  style={{ boxSizing:"border-box" }}>
                <div className="col-sm-12">
                    <div className="text-warning mt-4 mb-4  mx-5" style={{borderBottom:"1px solid white"}}>
                        <h1 id="skill_sec_heading" style={{fontWeight:"300"}}>Education</h1>
                    </div>
                    <div className="container-fluid mb-5">
                                <div className="row">
                                <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading"><img src={gtu} alt="gtu" id="education_heading_image"/> Gujarat Technological University</p>
                                                <p className="" id="education_sec_text">Diploma in Information Technology</p>
                                                <p className="pb-4" id="education_sec_text">(July 2013-2016)</p>
                                            </div>
                                         </div>
                                    </div>

                                    {/* another sec */}

                                    <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading"><img src={gu} alt="gtu" id="education_heading_image"/> Gujarat University</p>
                                                <p className="" id="education_sec_text">Bachelor of Computer Application</p>
                                                <p className="pb-4" id="education_sec_text">(July 2019-20)</p>
                                            </div>
                                         </div>
                                    </div>


                                    {/* another sec end */}
                                </div>

                        </div>


                      
                        {/* css section start */}

                   

                        {/* css section end */}


                        {/* java script sectio start */}

              


                        {/* javascript section end */}

                    {/* certificates section */}
                    <div className="text-warning mt-4 mb-4  mx-5" style={{borderBottom:"1px solid white"}}>
                        <h1 id="skill_sec_heading" style={{fontWeight:"300"}}>Certifiacations</h1>
                    </div>
                    <div className="container-fluid">
                                <div className="row">
                                <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading"><img src={rhcsa} alt="gtu" id="education_heading_image"/> RHCSA</p>
                                                <p className="" id="education_sec_text">Red Hat Certified System
Administrator </p>
                                                <p className="pb-4" id="education_sec_text">Certification Id 160-226-718</p>
                                            </div>
                                         </div>
                                    </div>

                                    {/* another sec */}

                                    <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading"><img src={rhce} alt="gtu" id="education_heading_image"/> RHCE</p>
                                                <p className="" id="education_sec_text">Red Hat Certified Engineer</p>
                                                <p className="pb-4" id="education_sec_text">Certification Id 160-226-718</p>
                                            </div>
                                         </div>
                                    </div>


                                    {/* another sec end */}


                                       {/* another sec */}

                                       <div className="col-sm-6">
                                        <div id="education_sec_box_main_div" className="">
                                            
                                            <div id="education_section_box">
                                             <p id="education_sec_box_heading">Participated in Microsoft AI Classroom Serires</p>
                                             <p id="education_sec_box_heading">I attended foundation program in data science by
greyCampus certificate verify at</p>
<p className="pb-4" id="education_sec_text"><a href="https://www.greycampus.com/elearning/certificate/60810
233081319">https://www.greycampus.com/elearning/certificate/60810
233081319</a></p>
                                            </div>
                                         </div>
                                    </div>


                                    {/* another sec end */}


                                </div>

                        </div>
                   {/*certificate section end */}
                </div>
        




            
        
            </div>
        </div>

</>
    );
}
export default Education;