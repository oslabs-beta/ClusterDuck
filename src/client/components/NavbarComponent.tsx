import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * NavbarComponent: Contains all of the buttons and navigation logic.
 * By utilizing the useNavigate hook, we're able to navigate throughout our
 * single page application while maintaining our "history".
 */
export default function NavbarComponent () {
  const navigateTo = useNavigate();

  const refreshPage = () => {
    navigateTo('/');
    window.location.reload();
  };

  return (
    <>
      <div className='navbar-container'>
        <div style={{ display: 'flex' }}>
          <img className='navbar-logo' src="https://i.imgur.com/0i6SfgA.png" width='64px'/>
          <button onClick={() => { navigateTo('/'); }} className='primary-button'>structure</button>
          <button onClick={() => { navigateTo('/namespace'); }} className='primary-button'>namespace metrics</button>
          <button onClick={() => { navigateTo('/cluster'); }} className='primary-button'>cluster testing</button>
        </div>
        <div>
          <button onClick={() => { refreshPage(); }} className='refresh-button'>
            <i className="fa-solid fa-arrow-rotate-right fa-2xl"></i>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
