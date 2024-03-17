import React, { useState, useEffect } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import './medicalhistory.css';
import Anatomy from '../Component/anatomy';


function Medicalhistory() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // document.body.style.overflow = 'hidden';
        // document.documentElement.style.overflowY = 'hidden';
        // document.body.style.overflow = 'auto';
        document.documentElement.style.overflowY = 'auto';
        document.documentElement.style.overflowX = 'auto';
        document.body.style.overflowX = 'auto';
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const historyDates = [
        { date: '7/1/2024', details: 'Details for 7/1/2024' },
        { date: '8/1/2024', details: 'Details for 8/1/2024' },
        { date: '9/1/2024', details: 'Details for 9/1/2024' },
        { date: '10/1/2024', details: 'Details for 10/1/2024' }
    ];

    const [detaildate, setdetaildate] = useState(historyDates[0].date);


    const toggleDetails = index => {
        setActiveIndex(activeIndex === index ? null : index);
        setdetaildate(historyDates[index].date);
    };


    return (
        <>
            <div className={mainClass}>

                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Medical History</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Medical History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="ContainnerMedHis">

                    <div className="MedHisMenu">
                        <div className="searchboxarea">
                            <div className="searchbox">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input className="search-input" type="search" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="HistoryList">
                            {historyDates.map((item, index) => (
                                <>
                                    <div key={index} className={`boxlist ${activeIndex === index && windowWidth <= 900 ? 'changeborder' : ''}`} onClick={() => toggleDetails(index)}>
                                        <div className="text">{item.date}</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    {activeIndex === index && windowWidth <= 900 && (
                                        <div className="ItemDetails">
                                            <div className="MedHisDetail-header">
                                                <div className="text">Detail for : {item.date}</div>
                                            </div>
                                            <div className="MedHisDetail-data">
                                                <div className="Meddatainfo">
                                                    <div className="Meddata">120</div>
                                                    <div className="MedInfo">ความดันขณะหัวใจบีบตัว</div>
                                                </div>
                                                <div className="Meddatainfo">
                                                    <div className="Meddata">80</div>
                                                    <div className="MedInfo">ความดันขณะหัวใจคลายตัว</div>
                                                </div>
                                                <div className="Meddatainfo">
                                                    <div className="Meddata">70</div>
                                                    <div className="MedInfo">อัตราการเต้นของหัวใจ</div>
                                                </div>
                                            </div>
                                            <div className="MedHisDetail-data-two">
                                                <div className="Meddatainfo">
                                                    <div className="Meddata">60</div>
                                                    <div className="MedInfo">น้ำหนัก</div>
                                                </div>
                                                <div className="Meddatainfo">
                                                    <div className="Meddata">175</div>
                                                    <div className="MedInfo">ส่วนสูง</div>
                                                </div>
                                            </div>
                                            <div className="MedHisDetail-data-three">
                                                <div className="kioskdata">
                                                    <div className="topic">
                                                        Data from Kiosk :
                                                    </div>
                                                    <div className="data">
                                                        <p>1. เป็นคนหล่อมากๆนะครับอิอิ</p>
                                                        <p>2. เป็นมาตั้งแต่เกิดอะดิ๊</p>
                                                        <p>3. โรคประจำตัวหล่อเกินไป โรคเรื้อรังก็หล่อจัดอะ</p>
                                                        <p>4. อาชีพหล่อไปวันๆ</p>
                                                        <p>5. ไม่แพ้ยา</p>
                                                        <p>6. ไม่ดื่ม</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MedHisDetail-anatomy">
                                                <div><Anatomy /></div>
                                            </div>
                                        </div>

                                    )}
                                </>
                            ))}
                        </div>
                    </div>

                    <div className="MedHisDetail">
                        <div className="MedHisDetail-header">
                            <div className="text">Detail for : {detaildate}</div>
                        </div>
                        <div className="MedHisDetail-data">
                            <div className="Meddatainfo">
                                <div className="Meddata">120</div>
                                <div className="MedInfo">ความดันขณะหัวใจบีบตัว</div>
                            </div>
                            <div className="Meddatainfo">
                                <div className="Meddata">80</div>
                                <div className="MedInfo">ความดันขณะหัวใจคลายตัว</div>
                            </div>
                            <div className="Meddatainfo">
                                <div className="Meddata">70</div>
                                <div className="MedInfo">อัตราการเต้นของหัวใจ</div>
                            </div>
                        </div>
                        <div className="MedHisDetail-data-two">
                            <div className="Meddatainfo">
                                <div className="Meddata">60</div>
                                <div className="MedInfo">น้ำหนัก</div>
                            </div>
                            <div className="Meddatainfo">
                                <div className="Meddata">175</div>
                                <div className="MedInfo">ส่วนสูง</div>
                            </div>
                        </div>
                        <div className="MedHisDetail-data-three">
                            <div className="kioskdata">
                                <div className="topic">
                                    Data from Kiosk :
                                </div>
                                <div className="data">
                                    <p>1. เป็นคนหล่อมากๆนะครับอิอิ</p>
                                    <p>2. เป็นมาตั้งแต่เกิดอะดิ๊</p>
                                    <p>3. โรคประจำตัวหล่อเกินไป โรคเรื้อรังก็หล่อจัดอะ</p>
                                    <p>4. อาชีพหล่อไปวันๆ</p>
                                    <p>5. ไม่แพ้ยา</p>
                                    <p>6. ไม่ดื่ม</p>
                                </div>
                            </div>
                        </div>
                        <div className="MedHisDetail-anatomy">
                            <div><Anatomy /></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Medicalhistory


