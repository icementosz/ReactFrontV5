import React, { useState } from 'react';
import './addusermodal.css';
import './viewusermodal.css';

const Viewusermodal = ({ onClose }) => {

    return (
        <div className="modal-backdrop">
            <div className="modal-content">

                <p>Information User</p>
                <i className="fa-solid fa-xmark" onClick={onClose}></i>

                <div className="informationuser-header">
                    <div className="picture">
                        <img src="../../UserProfile/rashford.jpg" alt="" />
                    </div>
                    <div className="box-header">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-star"></i>
                                <div className="title">Role :</div>
                            </div>
                            <div className="infodetail">
                                Patient
                            </div>
                        </div>
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-lock"></i>
                                <div className="title">Password :</div>
                            </div>
                            <div className="infodetail">
                                123456
                            </div>
                        </div>

                    </div>
                </div>

                <div className="informationuser">
                    <div className="two-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-user"></i>
                                <div className="title">Name :</div>
                            </div>
                            <div className="infodetail">
                                Marcus Rashford
                            </div>
                        </div>
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-venus-mars"></i>
                                <div className="title">Gender :</div>
                            </div>
                            <div className="infodetail">
                                Male
                            </div>
                        </div>
                    </div>

                    <div className="two-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-phone"></i>
                                <div className="title">Phone :</div>
                            </div>
                            <div className="infodetail">
                                092-252-4525
                            </div>
                        </div>
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-cake-candles"></i>
                                <div className="title">Birthday :</div>
                            </div>
                            <div className="infodetail">
                                12/3/2024
                            </div>
                        </div>
                    </div>

                    <div className="one-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="title">Address :</div>
                            </div>
                            <div className="infodetail">
                                85/3 Soi Prachumporn, Chaeng Watthana Rd., Don Muang , Bangkok
                            </div>
                        </div>
                    </div>

                    <div className="one-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-address-card"></i>
                                <div className="title">CardID :</div>
                            </div>
                            <div className="infodetail">
                                12345678910111
                            </div>
                        </div>
                    </div>

                    <div className="two-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-suitcase"></i>
                                <div className="title">Occupation :</div>
                            </div>
                            <div className="infodetail">
                                Football Player
                            </div>
                        </div>
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-face-sad-tear"></i>
                                <div className="title">Congenital Disease :</div>
                            </div>
                            <div className="infodetail">
                                -
                            </div>
                        </div>
                    </div>

                    <div className="one-group-info">
                        <div className="boxinfo">
                            <div className="infohead">
                                <i className="fa-solid fa-disease"></i>
                                <div className="title">Allergy :</div>
                            </div>
                            <div className="infodetail">
                                Peanuts
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Viewusermodal