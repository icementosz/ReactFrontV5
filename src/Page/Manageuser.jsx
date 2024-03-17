import React, { useState, useEffect } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MUIDataTable from "mui-datatables";
import './manageuser.css';
import Addusermodal from '../Component/addusermodel.jsx';
import Updateusermodal from '../Component/updateusermodal.jsx';
import Viewusermodal from '../Component/viewusermodal.jsx';
import Swal from 'sweetalert2';

function Manageuser() {

    const columns = [
        {
            name: 'Profile', label: 'Profile', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'CardID', label: 'CardID', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Sex', label: 'Sex', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Role', label: 'Role', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Action', label: 'Action', options: {
                sort: false, // Disables sorting for this column
            },
        },
    ];


    const [responsive, setResponsive] = useState('standard');


    const suretodelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const options = {
        selectableRows: 'none',
        elevation: 0,
        responsive,
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        textTransform: 'none',
        pagination: true, // Enable pagination
        rowsPerPage: 5, // Set number of rows per page
        rowsPerPageOptions: [5, 10, 15],

    };

    const { isSidebarOpen } = useSidebar();
    const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);
    const [isModalOpenUpdateUser, setIsModalUpdateUser] = useState(false);
    const [isModalOpenViewUser, setIsModalViewUser] = useState(false);
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    const openModalAddUser = () => setIsModalOpenAddUser(true);
    const closeModalAddUser = () => setIsModalOpenAddUser(false);
    const openModalUpdateUser = () => setIsModalUpdateUser(true);
    const closeModalUpdateUser = () => setIsModalUpdateUser(false);
    const openModelViewUser = () => setIsModalViewUser(true);
    const closeModalViewUser = () => setIsModalViewUser(false);
 
    useEffect(() => {
        if (isModalOpenAddUser || isModalOpenUpdateUser || isModalOpenViewUser) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isModalOpenAddUser,isModalOpenUpdateUser,isModalOpenViewUser]);

    const [data1, setdata1] = useState([[<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip" onClick={openModelViewUser}></i>
        <i className="fa-solid fa-pen-to-square" onClick={openModalUpdateUser}></i>
        <i className="fa-solid fa-trash-can" onClick={suretodelete}></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable female">Female</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]
        , [
        <div className='imgintable'>
            <img src="../../UserProfile/rashford.jpg" alt="" />
            <div className='profiletext'>
                <p>Rashford</p>
                <p>012-345-6789</p>
            </div>
        </div>, "1234567891011",
        <div className="sexintable female">Female</div>, "Patient",
        <div className="iconintable">
            <i className="fa-solid fa-id-card-clip"></i>
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    ],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>], [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>], [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]
    ]);

    return (
        <>
            <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Manage User</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Manage User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="functable">
                    <div className="btnadduser">
                        <input type="submit" value="+ New User" onClick={openModalAddUser} />
                    </div>
                    <div className="searchboxandropdown">
                        <div className="searchbox">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className="search-input" type="search" placeholder="Search..." />
                        </div>
                        <div className="dropdown">
                            <label htmlFor="role">Role : </label>
                            <select name="role" id="role">
                                <option value="All">All</option>
                                <option value="Patient">Patient</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="my-table" style={{ marginTop: "30px" }}>
                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <MUIDataTable
                            data={data1}
                            columns={columns}
                            options={options}
                        />
                    </div>
                </div>

            </div>
            {isModalOpenAddUser && <Addusermodal onClose={closeModalAddUser} />}
            {isModalOpenUpdateUser && <Updateusermodal onClose={closeModalUpdateUser} />}
            {isModalOpenViewUser && <Viewusermodal onClose={closeModalViewUser} />}


        </>
    )
}


export default Manageuser