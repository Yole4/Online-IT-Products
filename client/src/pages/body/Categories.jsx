import React, { useEffect, useState } from 'react';
import axios from 'axios';

// require header and sidebar
import SideBar from '../SideBar';
import Header from '../Header';

function Categories() {

    const [isAddCategories, setIsAddCategories] = useState(false);
    const [isEditCategories, setIsEditCategories] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    // -------------- Loading List ----------
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

                <section className="content ">
                    <div className="container-fluid">
                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">List of Category</h3>
                                <div className="card-tools">
                                    <a href="#" className="btn btn-flat btn-sm btn-primary" onClick={() => setIsAddCategories(true)}><span className="fas fa-plus" />  Add New <span className='department-text'>Category</span></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="container-fluid" style={{ maxHeight: '70vh', overflow: 'auto' }}>
                                        <table className="table table-hover table-striped">
                                            <colgroup>
                                                <col width="5%" />
                                                <col width="20%" />
                                                <col width="30%" />
                                                <col width="15%" />
                                                <col width="10%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Date Created</th>
                                                    <th>Name</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td className>Augutst 4, 1999</td>
                                                    <td>Name</td>
                                                    <td >
                                                        {/* <span className="badge badge-success badge-pill" style={{ background: item.status === 'Active' ? '' : 'red' }}>Status</span> */}
                                                        <span className="badge badge-success badge-pill">Status</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <button type="button" className="btn btn-flat btn-default btn-sm dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                            Action
                                                        </button>
                                                        <div className="dropdown-menu" role="menu">
                                                            <a className="dropdown-item edit_data" href="#" onClick={() => setIsEditCategories(true)}><span className="fa fa-edit text-primary" /> Edit</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item delete_data" href="#" onClick={() => setIsDelete(true)}><span className="fa fa-trash text-danger" /> Delete</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            {/* ------------------  ADD CATEGORY  --------------------------- */}
            {isAddCategories && (
                <div className="popup">
                    <div className='department-modal' style={{ animation: isAddCategories ? 'animateCenter 0.3s linear' : '' }}>
                        <h5>Add Category</h5>
                        <hr />
                        <div className="container-fluid">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className="control-label">Category Name</label>
                                    <input type="text" className="form-control form-control-border" placeholder="Category Name" required />
                                </div>
                                
                                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <button className='btn btn-danger' style={{ width: '100px' }} type='button' onClick={() => setIsAddCategories(false)}>Cancel</button>
                                    <button className='btn btn-primary' style={{ width: '100px' }} type='submit'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* -----------------   EDIT CATEGORY -------------------- */}
            {isEditCategories && (
                <div className="popup">
                    <div className='department-modal' style={{ animation: isEditCategories ? 'animateCenter 0.3s linear' : '' }}>
                        <h5>Edit Category</h5>
                        <hr />
                        <div className="container-fluid">
                            <form action id="department-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="control-label">Name</label>
                                    <input type="text" className="form-control form-control-border" placeholder="category" required />
                                </div>
                                <div className="form-group" style={{ marginBottom: '30px' }}>
                                    <label htmlFor className="control-label">Status</label>
                                    <select name="status" id="status" className="form-control form-control-border" required >
                                        <option value="" selected disabled>Select Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <button className='btn btn-danger' style={{ width: '100px' }} type='button' onClick={() => setIsEditCategories(false)}>Cancel</button>
                                    <button className='btn btn-primary' style={{ width: '100px' }} type='submit'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* -----------------------DELETE CONFIRMATION---------------------- */}
            {isDelete && (
                <div className="popup">
                    <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isDelete ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

                        <div className="popup-edit">
                            <h5>Delete?</h5>
                        </div>
                        <hr />
                        <div className='form-div'>
                            <span>Are you sure you wan't to Delete (Product Name)?</span>
                        </div>

                        <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
                            <button className='btn btn-danger' type='button' style={{ width: '80px' }} onClick={() => setIsDelete(false)}>Cancel</button>
                            <button className='btn btn-primary' type='submit' style={{ width: '80px' }} >Delete</button>
                        </div>
                    </div>
                </div>
            )}

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
        </>
    )
}

export default Categories;
