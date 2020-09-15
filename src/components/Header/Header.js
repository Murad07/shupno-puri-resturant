import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import banner from '../../images/bannerbackground.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-light '>
        <a href='#' className='navbar-brand'>
          <img src={logo} height='30' alt='' />
        </a>

        <div>
          <a href='/login' className='text-dark btn'>
            Login
          </a>
          <a href='/sign-up' className='btn btn-danger my-2 mr-sm-0'>
            Sign Up
          </a>
        </div>
      </nav>

      {/* Banner */}

      <div className='card  border-0'>
        <img src={banner} className='card-img' alt='...' />
        <div className='card-img-overlay d-flex'>
          <div className='align-self-center mx-auto'>
            <h3 className='card-title '>Best Food waiting for your belly</h3>

            <div className='input-group'>
              <input
                type='text'
                className='form-control  bRound'
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
              <div className='input-group-prepend'>
                <span
                  className='input-group-text readBtn bRound'
                  id='basic-addon1'
                >
                  Serach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className='d-flex justify-content-center'>
        <Link to='/breakfast' className='text-dark btn'>
          Brakfast
        </Link>
        <Link to='/lunch' className='text-dark btn'>
          Lunch
        </Link>
        <Link to='/dinner' className='text-dark btn'>
          Dinner
        </Link>
      </div>

      {/* last div */}
    </div>
  );
};

export default Header;
