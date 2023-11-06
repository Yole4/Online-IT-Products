// import React, { useEffect, useState } from 'react';
import axios from 'axios';

// react icons
import { FaThList, FaUsers, FaUsersSlash } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { TbArchiveOff } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
// import BackendURL from '../../backend url/BackendURL';
import { MdDateRange } from "react-icons/md";

// require header and sidebar
import SideBar from '../SideBar';
import Header from '../Header';

function Dashboard() {
    // const backendUrl = BackendURL();
    // const token = localStorage.getItem('token');
    const navigate = useNavigate();

    // -------------- Loading List ----------
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    // const [isError, setIsError] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);

    return (
        <>
            <SideBar />
            <Header />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6" style={{ width: '100%' }}>
                                {/* <h1 className="m-0">Welcome to Thesis and Capstone Archiving System</h1> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginLeft: '20px', textAlign: 'center', marginBottom: '20px' }}>
                    <h1 className="m-0">Welcome to Online IT Product Market</h1>
                    <hr />
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>2</h3>
                                        <p>Active Department</p>
                                    </div>
                                    <div className="icon">
                                        <i><FaThList /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/department-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>3<sup style={{ fontSize: 20 }}></sup></h3>
                                        <p>Active Courses</p>
                                    </div>
                                    <div className="icon">
                                        <i><RiNewspaperLine /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/curriculumn-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>2</h3>
                                        <p>Active School Year</p>
                                    </div>
                                    <div className="icon">
                                        <i><MdDateRange /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/department-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>3</h3>
                                        <p>Pending Request User</p>
                                    </div>
                                    <div className="icon">
                                        <i><FaUsers /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/student-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>1</h3>
                                        <p>Publish Projects</p>
                                    </div>
                                    <div className="icon">
                                        <i><FiArchive /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/archive-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>12</h3>
                                        <p>UnPublish Projects</p>
                                    </div>
                                    <div className="icon">
                                        <i><TbArchiveOff /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/archive-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>3</h3>
                                        <p>Users</p>
                                    </div>
                                    <div className="icon">
                                        <i><FaUsers /></i>
                                    </div>
                                    <a href="#" className="small-box-footer" onClick={() => navigate('/users-list')}>More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* fetching data screen */}
                {/* {isLoading && (
                    <div className="popup">
                        <div className="modal-pop-up-loading">
                            <div className="modal-pop-up-loading-spiner"></div>
                            <p>Loading...</p>
                        </div>
                    </div>
                )} */}

                {/* Loading div */}
                {/* {isError || isSuccess ? (
                    <div className='error-respond' style={{ backgroundColor: isSuccess && !isError ? '#7b4ae4' : '#fb7d60' }}>
                        <div>
                            <h5>{errorMessage}</h5>
                        </div>
                    </div>
                ) : (
                    <></>
                )} */}
            </div>
        </>
    )
}

export default Dashboard
