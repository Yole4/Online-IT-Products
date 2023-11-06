import React, { useEffect, useState } from 'react';

import '../../assets/css/Home.css';

// images
import image from '../../assets/images/archive-1.png';
import mouse from '../../assets/images/mouse.jpeg';
import computer from '../../assets/images/computer.png';
import laptop from '../../assets/images/laptop.avif';

import { useNavigate } from 'react-router-dom';

// react icons
import { LuShoppingCart } from "react-icons/lu";
import { BsPersonCircle, BsArrowUpSquare } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineMinus, AiOutlinePlus, AiFillLike, AiFillShop } from "react-icons/ai";
import { VscDeviceCamera } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { FcShipped } from "react-icons/fc";

function Home() {
  const navigate = useNavigate();

  // const [startMessage, setStartMessage] = useState(true);

  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isProductClick, setIsProductClick] = useState(false);
  const [isComments, setIsComments] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isMyAddress, setIsMyAddress] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [isMyOrder, setIsMyOrder] = useState(false);

  // ---------------------------------- PARTIAL LOGIN --------------------------------
  const [isLogin, setIsLogin] = useState(false);

  // ---------------------------------- SAMPLE AMMOUNT --------------------------------
  const [quantity, setQuantity] = useState(0);
  const [givenAmmount, setGivenAmmount] = useState(40);
  const [ammount, setAmmount] = useState(0);
  const [stack, setStack] = useState(50);

  // solve the ammount
  useEffect(() => {
    if (quantity !== 0) {
      setAmmount(givenAmmount * quantity);
    } else {
      setAmmount(0);
    }
  }, [quantity]);

  return (
    <>

      <nav className="main-header navbar navbar-expand navbar-primary navbar-dark bg-navy" style={{ marginLeft: '0' }}>
        {/* Left navbar links */}
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link"><GrProductHunt size={20} /></a>
          </li>

          <li className="nav-item d-sm-inline-block" style={{ marginLeft: '-20px' }}>
            <span style={{ cursor: 'pointer' }} className="nav-link">IT Products</span>
          </li>

        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">

          {/* // ================================================================= NOTIFICATION =============================================================================== */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">3 Notification</span>


              <div style={{ maxHeight: '400px', overflow: 'auto' }}>
                <div className='dropdown-item other' style={{ fontSize: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex' }}>
                    <i className="fas fa-bell mr-2" style={{ color: 'rgba(80, 66, 66, 0.935)', fontSize: '15px', marginTop: '5px' }} /><p style={{ marginLeft: '10px' }}>this is the Notification</p>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <p style={{ marginLeft: 22, fontSize: 10, color: 'rgb(105, 96, 96)' }}>August 4, 19899</p>
                  </div>
                </div>
              </div>

              <div className="dropdown-divider" />
              <a data-toggle="modal" data-target="#allNotification" style={{ cursor: 'pointer' }} className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>

          <li className="nav-item dropdown" onClick={() => setIsCart(true)}>
            <div className="nav-link">
              <LuShoppingCart style={{ cursor: 'pointer' }} size={20} />
              <span className="badge badge-warning navbar-badge">3</span>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Shelo Mora Paglinawan</span>
              <img style={{ width: 25, height: 25 }} className="img-profile rounded-circle" src={laptop} />
            </a>

            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" data-toggle="modal" data-target="#profile" style={{ cursor: 'pointer' }} onClick={() => setIsProfile(true)}><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" data-toggle="modal" style={{ cursor: 'pointer' }} onClick={() => setIsMyAddress(true)}><i className="fa-sm fa-fw mr-2 text-gray-400" ><FaAddressCard size={18} style={{ color: 'black', marginTop: '-3px' }} /></i>
                My Address
              </a>
              <a className="dropdown-item" data-toggle="modal" style={{ cursor: 'pointer' }} onClick={() => setIsMyOrder(true)}><i className="fa-sm fa-fw mr-2 text-gray-400" ><FcShipped size={18} style={{ color: 'black', marginTop: '-3px' }} /></i>
                My Orders
              </a>
              <a className="dropdown-item" data-toggle="modal" data-target="#change_password" style={{ cursor: 'pointer' }} onClick={() => setIsChangePassword(true)}><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Change Password
              </a>
              <a className="dropdown-item" data-toggle="modal" data-target="#logout" style={{ cursor: 'pointer' }} onClick={() => setIsLogout(true)}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div className='top-search'>
        <form action="simple-results.html">
          <div>
            <input type="search" className="form-control " placeholder="Search Product" style={{paddingLeft: '35px', borderRadius: '5px', height: '40px', fontSize: '15px'}} />
            <BiSearchAlt2 size={23} style={{position: 'absolute', marginTop: '-30px', marginLeft: '8px'}} />
          </div>
        </form>
      </div>

      <div className='category-container'>
        <button className='category'>Tablets</button>
        <button className='category'>Mouse</button>
        <button className='category'>Keyboards</button>
        <button className='category'>Networking</button>
        <button className='category'>Computer</button>
        <button className='category'>Computer</button>
        <button className='category'>Laptop</button>
        <button className='category'>Tablets</button>
        <button className='category'>Mouse</button>
        <button className='category'>Keyboards</button>
        <button className='category'>Networking</button>
        <button className='category'>Computer</button>
      </div>

      <div className="gallery">
        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={laptop} className='product-image' alt="" />
          <h3 className='product-name'>Laptop</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱100</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={mouse} className='product-image' alt="" />
          <h3 className='product-name'>Mouse</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={computer} className='product-image' alt="" />
          <h3 className='product-name'>Computer</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={mouse} className='product-image' alt="" />
          <h3 className='product-name'>Mouse</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={laptop} className='product-image' alt="" />
          <h3 className='product-name'>Laptop</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱100</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={mouse} className='product-image' alt="" />
          <h3 className='product-name'>Mouse</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={computer} className='product-image' alt="" />
          <h3 className='product-name'>Computer</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>

        <div className="product-content" onClick={() => setIsProductClick(isProductClick ? false : true)}>
          <img src={mouse} className='product-image' alt="" />
          <h3 className='product-name'>Mouse</h3>
          <div className="ammount" style={{ textAlign: 'left', marginLeft: '20px', color: 'red' }}>
            <span>₱150</span>
            <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px' }}>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li style={{ marginLeft: '10px', color: 'black' }}>100 Sold</li>
            </ul>
          </div>
          <div style={{ textAlign: 'left', marginLeft: '10px', padding: '0px 15px 10px 10px' }}>
            <span>Sta. Cruz Libertad Aurora, Zamboanga Del Sur</span>
          </div>
        </div>
      </div>


      {/* --------   PROFILE ---------- */}
      {isProfile && (
        <div className="popup" onClick={() => setIsProfile(false)}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()} style={{ animation: isProfile ? 'dropBottom .3s linear' : '' }}>
            <div className="modal-close" onClick={() => setIsProfile(false)}>
              <AiOutlineCloseCircle size={30} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={laptop} style={{ borderRadius: '50%', height: '150px', width: '150px' }} />
              <label htmlFor="uploadPhoto" style={{ marginLeft: '-40px', cursor: 'pointer', zIndex: '3', color: 'white', position: 'absolute', marginTop: '110px' }}>
                <VscDeviceCamera size={30} style={{ backgroundColor: 'rgb(71, 71, 98)', padding: '3px', borderRadius: '50%' }} />
                <input type="file" id="uploadPhoto" style={{ display: 'none' }} />
                {/* <input type="file" id="uploadPhoto" onChange={(e) => setAutoImage(e.target.files[0])} style={{ display: 'none' }} /> */}
              </label>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>
                <h2 style={{ fontSize: '20px' }}>Shelo Mora Paglinawan</h2>
              </div>
              <div style={{ marginTop: '10px' }}>
                <span>Customer</span>
              </div><br />
            </div>
            <hr />
            <div className="form-control" style={{ textAlign: 'center' }}>
              <span>Other profile view</span>
            </div>
          </div>
        </div>
      )}


      {/* --------   CART ---------- */}
      {isCart && (
        <div className="popup" onClick={() => setIsCart(false)}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()} style={{ animation: isCart ? 'dropBottom .3s linear' : '' }}>
            <div className="modal-close" onClick={() => setIsCart(false)}>
              <AiOutlineCloseCircle size={30} />
            </div>
            {/* <span style={{color: 'red'}}>Cart is Empty!</span> */}
            <div style={{ marginBottom: '15px', fontWeight: 'bold' }}>
              <span>My Cart</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'start', gap: '8px' }}>
              <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
              <AiFillShop size={20} />
              <span>Eloy's Cart</span>
              <div style={{ position: 'absolute', right: '20px', color: 'red' }}>
                <span>₱123</span>
              </div>
            </div>

            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
              <div style={{ display: 'flex', gap: '7px', justifyContent: 'center', alignItems: 'center' }}>
                <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
                <img src={laptop} alt="" style={{ width: '50px', height: '50px' }} />
                <span>Laptop</span>
              </div>

              <div style={{ display: 'flex' }}>
                <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineMinus /></button>
                <span style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', padding: '2px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlinePlus /></button>
              </div>

              <span><RiDeleteBin6Line size={20} style={{ color: 'red', cursor: 'pointer' }} /></span>
            </div>

            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
              <div style={{ display: 'flex', gap: '7px', justifyContent: 'center', alignItems: 'center' }}>
                <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
                <img src={laptop} alt="" style={{ width: '50px', height: '50px' }} />
                <span>Laptop</span>
              </div>

              <div style={{ display: 'flex' }}>
                <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineMinus /></button>
                <span style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', padding: '2px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlinePlus /></button>
              </div>

              <span><RiDeleteBin6Line size={20} style={{ color: 'red', cursor: 'pointer' }} /></span>
            </div>

            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
              <div style={{ display: 'flex', gap: '7px', justifyContent: 'center', alignItems: 'center' }}>
                <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
                <img src={laptop} alt="" style={{ width: '50px', height: '50px' }} />
                <span>Laptop</span>
              </div>

              <div style={{ display: 'flex' }}>
                <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineMinus /></button>
                <span style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', padding: '2px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlinePlus /></button>
              </div>

              <span><RiDeleteBin6Line size={20} style={{ color: 'red', cursor: 'pointer' }} /></span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button style={{ width: '100%', fontSize: '15px', borderRadius: '4px', color: 'black', padding: '10px', background: 'orange' }}>Check Out</button>
            </div>

          </div>
        </div>
      )}

      {/* --------   PRODUCT LIST ---------- */}
      {isProductClick && (
        <div className="popup" onClick={() => setIsProductClick(false)}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()} style={{ animation: isProductClick ? 'dropBottom .3s linear' : '' }}>
            <div className="modal-close" onClick={() => setIsProductClick(false)} id='comments'>
              <AiOutlineCloseCircle size={30} />
            </div>
            <div style={{ fontWeight: 'bold' }}>
              <span>Mouse</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '13px', color: 'red' }}>
              <span>Stock: {stack}</span>
              <div>
                <span>Ammount: </span>
                <span>₱{ammount}</span>
              </div>
            </div>
            <div style={{ marginTop: '4px' }}>
              description
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineMinus /></button>
                <span style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', padding: '2px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlinePlus /></button>
              </div>
              <div>
                <button style={{ borderRadius: '20px', fontSize: '15px', width: '150px', padding: '8px', color: 'black', backgroundColor: quantity !== 0 ? 'orange' : '' }}>Add to cart</button>
              </div>
            </div>

            <div>
              <button style={{ padding: '2px', marginTop: '10px', background: 'transparent', color: 'black', fontSize: '13px' }} onClick={() => setIsComments(isComments ? false : true)}>{isComments ? 'Show Less' : 'Show Comments'}</button>
            </div>

            {/* comments */}
            {isComments && (
              <div style={{ animation: isComments ? 'dropBottom .3s linear' : '' }}>
                <hr />
                <div>
                  <span>Product Ratings and Comments</span>

                  <hr />

                  <div>
                    <div style={{ display: 'flex' }}>
                      <img src={mouse} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>User Name</span>
                        <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px', fontSize: '13.5px', marginBottom: '4px' }}>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li style={{ color: 'black', marginLeft: '10px' }}> | </li>
                          <li style={{ marginLeft: '10px', color: 'black' }}>Mouse</li>
                        </ul>
                        <span style={{ fontSize: '12px' }}>August 5, 1999</span>
                      </div>
                    </div>

                    <div style={{ marginLeft: '70px', marginTop: '20px', fontSize: '14px' }}>
                      <div style={{ width: '100%' }}>
                        <span>this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments</span>
                      </div>
                      <div style={{ display: 'flex', fontSize: '15px', gap: '5px', marginTop: '8px' }}>
                        <AiFillLike style={{ cursor: 'pointer' }} size={20} />
                        <span> 5</span>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <div style={{ display: 'flex' }}>
                      <img src={mouse} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>User Name</span>
                        <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px', fontSize: '13.5px', marginBottom: '4px' }}>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li style={{ color: 'black', marginLeft: '10px' }}> | </li>
                          <li style={{ marginLeft: '10px', color: 'black' }}>Mouse</li>
                        </ul>
                        <span style={{ fontSize: '12px' }}>August 5, 1999</span>
                      </div>
                    </div>

                    <div style={{ marginLeft: '70px', marginTop: '20px', fontSize: '14px' }}>
                      <div style={{ width: '100%' }}>
                        <span>this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments</span>
                      </div>
                      <div style={{ display: 'flex', fontSize: '15px', gap: '5px', marginTop: '8px' }}>
                        <AiFillLike size={20} />
                        <span> 5</span>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <div style={{ display: 'flex' }}>
                      <img src={mouse} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>User Name</span>
                        <ul style={{ display: 'flex', listStyle: 'none', color: '#ff9f43', marginLeft: '-40px', fontSize: '13.5px', marginBottom: '4px' }}>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li><i className='fa fa-star'></i></li>
                          <li style={{ color: 'black', marginLeft: '10px' }}> | </li>
                          <li style={{ marginLeft: '10px', color: 'black' }}>Mouse</li>
                        </ul>
                        <span style={{ fontSize: '12px' }}>August 5, 1999</span>
                      </div>
                    </div>

                    <div style={{ marginLeft: '70px', marginTop: '20px', fontSize: '14px' }}>
                      <div style={{ width: '100%' }}>
                        <span>this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments this is the comments</span>
                      </div>
                      <div style={{ display: 'flex', fontSize: '15px', gap: '5px', marginTop: '8px' }}>
                        <AiFillLike size={20} />
                        <span> 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* My Address */}
      {isMyAddress && (
        <div className="popup">
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isMyAddress ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>My Address</span>
              <button onClick={() => setIsAddAddress(true)} style={{ width: 'auto', padding: '3px 10px', fontSize: '15px', borderRadius: '4px' }} className='btn btn-primary'>Add</button>
            </div>

            <hr />
            <div className="form-div" style={{ marginLeft: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'start', gap: '10px', alignItems: 'center', width: '100%' }}>
                <input type="radio" />
                <span>Libertad Aurora Zamboanga Del Sur</span>
              </div>
            </div>

            <hr />
            <div className="form-div" style={{ marginLeft: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'start', gap: '10px', alignItems: 'center', width: '100%' }}>
                <input type="radio" />
                <span>Sta Cruz, Dapitan City</span>
              </div>
            </div>

            <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
              <button className='btn btn-danger' type='button' style={{ width: '80px', fontSize: '15px' }} onClick={() => setIsMyAddress(false)}>Cancel</button>
              <button className='btn btn-primary' type='submit' style={{ width: '80px', fontSize: '15px' }}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Address */}
      {isAddAddress && (
        <div className="popup" style={{ fontSize: '15px' }}>
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isAddAddress ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit">
              <span style={{ fontWeight: 'bold' }}>Add Address</span>
            </div>

            <hr />

            <form >
              <div className='form-div'>
                <label htmlFor="">Street</label>
                <input type="text" className='form-control' placeholder='e.g. Sta. Cruz' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Village (Barangay)</label>
                <input type="text" className='form-control' placeholder='e.g. Libertad' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Municipality/City</label>
                <input type="text" className='form-control' placeholder='e.g. Dapitan City' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Province/State</label>
                <input type="text" className='form-control' placeholder='e.g. Zamboanga Del Norte' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Postal Code/Zip Code</label>
                <input type="number" className='form-control' placeholder='Zip Code' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Country</label>
                <input type="text" className='form-control' placeholder='e.g. Philippines' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Land Mark (Additional Address Info)</label>
                <input type="text" className='form-control' placeholder='e.g. Inside Rice Mailing Corporation' required />
              </div>

              <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
                <button className='btn btn-danger' type='button' style={{ width: '80px' }} onClick={() => setIsAddAddress(false)}>Cancel</button>
                <button className='btn btn-primary' type='submit' style={{ width: '80px' }}>Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* My Order */}
      {isMyOrder && (
        <div className="popup">
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isMyOrder ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit">
              <span>My Order</span>
            </div>

            <hr />
            <div className="form-div" style={{ color: 'red' }}>
              <span>No Order Yet</span>
            </div>
            <br />
            <div>
              <button className='btn btn-primary' style={{ width: '100%' }} onClick={() => setIsMyOrder(false)}>Okay</button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password */}
      {isChangePassword && (
        <div className="popup">
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isChangePassword ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit">
              <span>Change Password</span>
            </div>
            <hr />
            <form >
              <div className='form-div'>
                <label htmlFor="">Username</label>
                <input type="text" className='form-control' placeholder='Username' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Current Password</label>
                <input type="password" className='form-control' placeholder='*********' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">New Password</label>
                <input type="password" className='form-control' placeholder='*********' required />
              </div>

              <div style={{ marginTop: '15px' }}>
                <label htmlFor="">Confirm Password</label>
                <input type="password" className='form-control' placeholder='*********' required />
              </div>

              <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
                <button className='btn btn-danger' type='button' style={{ width: '80px' }} onClick={() => setIsChangePassword(false)}>Cancel</button>
                <button className='btn btn-primary' type='submit' style={{ width: '80px' }}>Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -----------------------LOGOUT CONFIRMATION---------------------- */}
      {isLogout && (
        <div className="popup">
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isLogout ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit">
              <h5>Logout?</h5>
            </div>
            <hr />
            <div className='form-div'>
              <span>Are you sure you wan't to logout?</span>
            </div>

            <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
              <button className='btn btn-danger' type='button' style={{ width: '80px' }} onClick={() => setIsLogout(false)}>No</button>
              <button className='btn btn-primary' type='submit' style={{ width: '80px' }} onClick={() => { localStorage.removeItem('token'); navigate('/'); setIsLogout(false) }}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
