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

function Home() {
  const navigate = useNavigate();

  // const [startMessage, setStartMessage] = useState(true);

  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isProductClick, setIsProductClick] = useState(false);
  const [isComments, setIsComments] = useState(false);

  // ---------------------------------- SAMPLE AMMOUNT --------------------------------
  const [quantity, setQuantity] = useState(0);
  const [givenAmmount, setGivenAmmount] = useState(40);
  const [ammount, setAmmount] = useState(0);
  const [stack, setStack] = useState(50);

  // solve the ammount
  useEffect(() => {
    if (quantity !== 0) {
      setAmmount(givenAmmount * quantity);
    }else{
      setAmmount(0);
    }
  }, [quantity]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setBackToTop(true);
  //     } else {
  //       setBackToTop(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* Wala ni labot */}
      {/* {startMessage && (
        <div className="popup">
          <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: startMessage ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

            <div className="popup-edit">
              <h5>Reminder!</h5>
            </div>
            <hr />
            <div className='form-div'>
              <span>Kani lang nga design bay, ang dashboard okay naman <br /> naa rakoy g comment dha, bali kani ra sa customer side ang usoba or butangi og design</span>
            </div>

            <div style={{ marginTop: '25px' }}>
              <button className='btn btn-danger' type='button' style={{ width: '100%' }} onClick={() => setStartMessage(false)}>Okay</button>
            </div>
          </div>
        </div>
      )} */}


      <div className="product-header">
        <span>IT Products</span>
        <div>
          <BiSearchAlt2 className='search-bar' size={23} />
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
            {/* <span style={{color: 'red'}}>Cart is Empty!</span> */}
            <div style={{marginBottom: '15px', fontWeight: 'bold'}}>
              <span>My Cart</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'start', gap: '8px' }}>
              <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
              <AiFillShop size={20} />
              <span>Eloy's Shop</span>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
              <input type="checkbox" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
              <img src={laptop} alt="" style={{ width: '50px', height: '50px' }} />
              <span>Laptop</span>

              <div style={{ display: 'flex' }}>
                <button onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineMinus /></button>
                <span style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', padding: '2px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', color: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlinePlus /></button>
              </div>

              <span>Delete</span>
            </div>

            <div style={{marginTop: '20px'}}>
              <button style={{width: '100%', fontSize: '15px', borderRadius: '4px', color: 'black', padding: '10px'}}>Check Out</button>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '13px' }}>
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
                <button style={{ borderRadius: '20px', fontSize: '15px', width: '150px', padding: '8px', color: 'black', backgroundColor: quantity !== 0 ? 'lightblue' : '' }}>Add to cart</button>
              </div>
            </div>

            <div>
              <button style={{ padding: '2px', marginTop: '10px', background: 'transparent', color: 'black', fontSize: '13px' }} onClick={() => setIsComments(isComments ? false : true)}>{isComments ? 'Show Less' : 'Show Comments'}</button>
            </div>

            {/* comments */}
            {isComments && (
              <div>
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
    </>
  )
}

export default Home
