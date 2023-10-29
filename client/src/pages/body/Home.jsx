import React from 'react';

import '../../assets/css/CSS.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the Home Page</h1>
      <button className='btn btn-primary' onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  )
}

export default Home
