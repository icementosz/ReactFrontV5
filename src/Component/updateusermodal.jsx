import React, { useState } from 'react';
import './addusermodal.css';
import Swal from 'sweetalert2';

const Addusermodal = ({ onClose }) => {
    const suretodelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            customClass: {
                popup: 'my-custom-swal'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    customClass: {
                        popup: 'my-custom-swal'
                    }
                });
            }
        });
    }

    const [file, setFile] = useState("../../UserProfile/DefaultUser.jpg");

    function handlePicChange(e) {
        const filecheck = e.target.files[0];
        if (filecheck) { // Check if any file is selected
            const fileURL = URL.createObjectURL(filecheck);
            setFile(fileURL);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        suretodelete();
    };

    const [CardID, setCardID] = useState("1111111111111");
    const handleCardIDChange = (e) => {
        setCardID(e.target.value);
    }
    const [Password, setPassword] = useState("123456");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-content">

                <p>Update User</p>
                <i className="fa-solid fa-xmark" onClick={onClose}></i>

                <form onSubmit={handleSubmit}>
                    <div className="formadduser-header">
                        <div className="picture">
                            <img src={file} alt="" />
                            <div className="file">
                                <input type="file" onChange={handlePicChange} accept=".png,.jpg,.jpeg" />
                            </div>
                        </div>
                        <div className="input-header">
                            <div className="input-group">
                                <label>Role</label>
                                <select name="role" id="role" required>
                                    <option value="Patient">Patient</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Nurse">Admin</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" value={Password} placeholder="Your Password" required pattern=".{3,15}" onChange={handlePasswordChange} />
                            </div>
                        </div>
                    </div>

                    <div className="formadduser">
                        <div className="two-group-horizontal">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required pattern="[a-zA-Zก-๏\s]{2,50}" />
                            </div>
                            <div className="input-group">
                                <label>Gender</label>
                                <select name="gender" id="gender" >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="two-group-horizontal">
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Your Phone" required pattern="[0-9]{10}" />
                            </div>
                            <div className="input-group">
                                <label>Birthday</label>
                                <input type="date" placeholder="Your birthday" required />
                            </div>
                        </div>
                        <div className="one-group-horizontal">
                            <div className="input-group">
                                <label>Address</label>
                                <input type="text" placeholder="Your Address" required pattern=".{3,150}" />
                            </div>
                        </div>
                        <div className="one-group-horizontal">
                            <div className="input-group">
                                <label>CardID</label>
                                <input type="text" value={CardID} placeholder="Your CardID" required pattern="[0-9]{13}" onChange={handleCardIDChange}/>
                            </div>
                        </div>
                        <div className="two-group-horizontal">
                            <div className="input-group">
                                <label>Occupation</label>
                                <input type="text" placeholder="Your Occupation" required pattern=".{2,30}" />
                            </div>
                            <div className="input-group">
                                <label>Congenital Disease</label>
                                <input type="text" placeholder="Your Congenital Disease" required pattern=".{1,30}" />
                            </div>
                        </div>
                        <div className="one-group-horizontal">
                            <div className="input-group">
                                <label>Allergy</label>
                                <input type="text" placeholder="Your Allergy" required pattern=".{1,30}" />
                            </div>
                        </div>
                    </div>

                    <div className="button-group">
                        <div className="btnadduser">
                            <input type="submit" value="Update" />
                            <input type="button" value="Cancel" onClick={onClose} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addusermodal