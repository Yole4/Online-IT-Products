// import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FaThList, FaUsers, FaUsersCog } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

// images
import givenImage from '../assets/images/given image.png';
import logo from '../assets/images/logo.png';

function SideBar() {
    const location = useLocation();

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <i className='fas fa-times close-button' data-widget="pushmenu" style={{ position: 'absolute', top: '17px', right: '20px', fontSize: '27px' }} href="#" role="button"></i>
                {/* Brand Logo */}
                <span className="brand-link span-cursor" style={{ width: '190px' }}>
                    <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Admin</span>
                </span>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img style={{ width: 34, height: 34 }} src={givenImage} className="img-profile rounded-circle" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block" data-toggle="modal" data-target="#profile" style={{ cursor: 'pointer' }}>Shelo Mora Paglinawan</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2" style={{ marginLeft: '10px' }}>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* =========================================================== PUBLICIZE RESEARCH ======================================================================================== */}
                            <li className="nav-item dropdown" >
                                <a href="#" className={location.pathname === '/dashboard' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }} >
                                <a className={location.pathname === '/archive-list' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><FiArchive /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        Archive List
                                    </p>
                                </a>
                            </li>
                            {/* =========================================================== RESEARCH WORKS ======================================================================================== */}
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }}>
                                <a className={location.pathname === '/student-list' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><FaUsers /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        Request User
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className='nav-link nav-home' style={{ marginLeft: '', fontSize: '18px', color: 'whitesmoke', marginBottom: '-10px' }}><span>Maintenance</span></p>

                    <nav className="mt-2" style={{ marginLeft: '10px' }}>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* =========================================================== PUBLICIZE RESEARCH ======================================================================================== */}
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }} >
                                <a className={location.pathname === '/department-list' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><FaThList /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        Department List
                                    </p>
                                </a>
                            </li>
                            {/* =========================================================== RESEARCH WORKS ======================================================================================== */}
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }} >
                                <a className={location.pathname === '/curriculumn-list' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><RiNewspaperLine /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        Courses
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }} >
                                <a className={location.pathname === '/school-year' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><MdDateRange /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        School Year
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }}>
                                <a className={location.pathname === '/users-list' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><FaUsersCog /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        User List
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown" style={{ cursor: 'pointer' }} >
                                <a className={location.pathname === '/settings' ? 'nav-link nav-home hover-side' : 'nav-link nav-home'}>
                                    <i className="nav-icon"><IoSettingsOutline /></i>
                                    <p style={{ marginLeft: '10px' }}>
                                        settings
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* fetching data screen */}
            {/* {isLoading && (
                <div className="popup">
                    <div className="modal-pop-up-loading">
                        <div className="modal-pop-up-loading-spiner"></div>
                        <p>Loading...</p>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default SideBar