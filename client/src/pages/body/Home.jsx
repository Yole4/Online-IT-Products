import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

import '../../assets/css/CSS.css';

function Home() {
  return (
    <div>
        <Header />
        <SideBar />
      Home
      <button className='btn btn-primary'>test</button>
    </div>
  )
}

export default Home
