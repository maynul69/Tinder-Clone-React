import React from 'react';
import mainLogo from '../../images/Main Logo.png'
import vacLogo from '../../images/vac new logo.png'

const Navbar = ({
  minimal,
  
  setShowModal,
  showModal,
  setIsSignup,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(false)
  };
  const authToken=false;

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? mainLogo : vacLogo} alt="" />
      </div>
      {!authToken && !minimal && (
        <button className="nav-btn" onClick={handleClick} disabled={showModal}>
          Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;