import React, { useState } from 'react';

import '../../assets/css/Home.css';

// images
import image from '../../assets/images/archive-1.png';
import mouse from '../../assets/images/mouse.jpeg';
import computer from '../../assets/images/computer.png';
import laptop from '../../assets/images/laptop.avif';

import { useNavigate } from 'react-router-dom';

// react icons
import { LuShoppingCart } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscDeviceCamera } from "react-icons/vsc";

function Home() {
  const navigate = useNavigate();

  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isProductClick, setIsProductClick] = useState(false);

  return (
    <>
      <div className="product-header">
        <span>IT Products</span>
        <div>
          <BiSearchAlt2 style={{ position: 'absolute', right: '287px', zIndex: '50', marginTop: '25px', color: '#5c5c5c' }} size={23} />
          {/* <input type="text" style={{borderRadius: '10px', height: '36px', padding: '10px 10px 10px 30px'}}/> */}
          <input type="text" className="form-control" style={{ position: 'absolute', right: '120px', paddingLeft: '38px', width: '200px', top: '18px' }} />

          <LuShoppingCart style={{ margin: '20px 10px 20px 20px', color: '#fff', cursor: 'pointer' }} onClick={() => setIsCart(isCart ? false : true)} size={30} />
          <BsPersonCircle style={{ margin: '20px 20px 20px 10px', color: '#fff', cursor: 'pointer' }} onClick={() => setIsProfile(isProfile ? false : true)} size={30} />
        </div>
      </div>

      <div className="product-options">
        <div className='product-list'>
          <button className='active'>All</button>
        </div>
        <div className='product-list'>
          <button>Mouse</button>
        </div>
        <div className='product-list'>
          <button>Laptop</button>
        </div>
        <div className='product-list'>
          <button>Computer</button>
        </div>
        <div className='product-list'>
          <button>Laptop</button>
        </div>
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

        <div className="product-content">
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

        <div className="product-content">
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

        <div className="product-content">
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

        <div className="product-content">
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

        <div className="product-content">
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

        <div className="product-content">
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

        <div className="product-content">
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
              <img src={mouse} style={{ borderRadius: '50%', height: '150px', width: '150px' }} />
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
            cart is empty
          </div>
        </div>
      )}

      {/* --------   PRODUCT LIST ---------- */}
      {isProductClick && (
        <div className="popup" onClick={() => setIsProductClick(false)}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()} style={{ animation: isProductClick ? 'dropBottom .3s linear' : '' }}>
            <div className="modal-close" onClick={() => setIsProductClick(false)}>
              <AiOutlineCloseCircle size={30} />
            </div>
            <div>
              <span>Mouse</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Stock: 40</span>
              <div>
                <span>Ammount: </span>
                <span>₱40</span>
              </div>
            </div>
            <div>
              description
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
