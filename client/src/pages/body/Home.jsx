import React from 'react';

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

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="product-header">
        <span>IT Products</span>
        <div>
          <BiSearchAlt2 style={{ position: 'absolute', right: '287px', zIndex: '50', marginTop: '25px', color: '#5c5c5c' }} size={23} />
          {/* <input type="text" style={{borderRadius: '10px', height: '36px', padding: '10px 10px 10px 30px'}}/> */}
          <input type="text" className="form-control" style={{position: 'absolute', right: '120px', paddingLeft: '38px', width: '200px', top: '18px'}}/>

          <LuShoppingCart style={{ margin: '20px 10px 20px 20px', color: '#fff', cursor: 'pointer' }} size={30} />
          <BsPersonCircle style={{ margin: '20px 20px 20px 10px', color: '#fff', cursor: 'pointer' }} size={30} />
        </div>
      </div>

      <div className="product-options">
        <button className='active'>All</button>
        <button>Mouse</button>
        <button>Laptop</button>
        <button>Computer</button>
        <button>Computer</button>
      </div>

      <div className="gallery">
        {/* <div className="product-content">
          <img src={mouse} className='product-image' alt />
          <h3 className='product-name'>testing</h3>
          <p className='product-description'>this is the sample image</p>
          <h6 className='product-ammount'>₱100</h6>
          <ul className='product-ul'>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star star" /></li>
          </ul>
          <button className="buy-2">Buy Now</button>
        </div>
        <div className="product-content">
          <img src={computer} className='product-image' alt />
          <h3 className='product-name'>testing</h3>
          <p className='product-description'>this is the sample image</p>
          <h6 className='product-ammount'>₱100</h6>
          <ul className='product-ul'>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star star" /></li>
          </ul>
          <button className="buy-3">Buy Now</button>
        </div>
        <div className="product-content">
          <img src={laptop} className='product-image' alt />
          <h3 className='product-name'>testing</h3>
          <p className='product-description'>this is the sample image</p>
          <h6 className='product-ammount'>₱100</h6>
          <ul className='product-ul'>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star checked star" /></li>
            <li className='product-li'><i className="fa fa-star star" /></li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div> */}
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
    </>
  )
}

export default Home
