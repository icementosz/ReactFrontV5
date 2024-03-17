import React, { useState, useEffect } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './personainfo.css';



function Personainfo() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    useEffect(() => {
        // document.body.style.overflow = 'hidden';
        // document.documentElement.style.overflowY = 'hidden';
        // document.body.style.overflow = 'auto';
        document.documentElement.style.overflowY = 'auto';
        document.documentElement.style.overflowX = 'auto';
        document.body.style.overflowX = 'auto';
    }, []);


    return (
        <>
            <div className={mainClass}>

                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Persona Information</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Persona Info</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="Personacontainer">

                    <div className="Persona-left">
                       <div className="profilehead">
                            <img src="../../UserProfile/rashford.jpg" alt="" />
                            <div className="name">Marcus Rashford</div>
                            <div className="line"></div>
                       </div>
                       <div className="simpledetail">
                            <div className="simpledata">
                                <div className="topic">
                                    <i className="fa-solid fa-address-book"></i>
                                    <div className="text">ID</div>
                                </div>
                                <div className="data">
                                    1001
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="simpledata">
                                <div className="topic">
                                    <i className="fa-solid fa-address-card"></i>
                                    <div className="text">CardID</div>
                                </div>
                                <div className="data">
                                    1234567899999
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="simpledata">
                                <div className="topic">
                                    <i className="fa-solid fa-venus-mars"></i>
                                    <div className="text">Gender</div>
                                </div>
                                <div className="data">
                                    Male
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="simpledata">
                                <div className="topic">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="text">Phone</div>
                                </div>
                                <div className="data">
                                    0123456789
                                </div>
                            </div>
                       </div>
                    </div>

                    <div className="Persona-right">
                        <div className="patientdetail">
                            <div className="patientdata">
                                <div className="topic">
                                    <i className="fa-solid fa-cake-candles"></i>
                                    <div className="text">BirthDay</div>
                                </div>
                                <div className="data">
                                    9/9/2545
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="patientdata">
                                <div className="topic">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="text">Address</div>
                                </div>
                                <div className="data">
                                    85/3 Soi Prachumporn, Chaeng Watthana Rd., Don Muang , Bangkok
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="patientdata">
                                <div className="topic">
                                    <i className="fa-solid fa-suitcase"></i>
                                    <div className="text">Occupation</div>
                                </div>
                                <div className="data">
                                    Football Player
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="patientdata">
                                <div className="topic">
                                <i className="fa-solid fa-face-sad-tear"></i>
                                    <div className="text">Congenital Disease</div>
                                </div>
                                <div className="data">
                                    -
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="patientdata">
                                <div className="topic">
                                <i className="fa-solid fa-disease"></i>
                                    <div className="text">Allergy</div>
                                </div>
                                <div className="data">
                                    Peanuts
                                </div>
                            </div>
                        </div>
                        <div className="contactfooter">
                            <div className="text">กรณีข้อมูลไม่ถูกต้องกรุณาติดต่อกลุ่มงานทะเบียนฯ โทร 1150</div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Personainfo


