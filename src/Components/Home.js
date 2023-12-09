import React, { useState } from 'react';
import AuthModal from './Shared/AuthModal';
import Navbar from './Shared/Navbar';


const Home = () => {
  const [showModal, setShowModal]=useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const authToken = 0;
  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignup(true);
  };
    return (
      <div className="overly">
        <Navbar
          minimal={false}
          setShowModal={setShowModal}
          showModal={showModal}
          setIsSignup={setIsSignup}
        ></Navbar>
        <div className="home">
          <h1 className='primary-title'>
            Swipe Right
          </h1>
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Sign Out" : "Create Account"}
          </button>
          {showModal && (
            <AuthModal
              setShowModal={setShowModal}
              
              isSignup={isSignup}
            ></AuthModal>
          )}
        </div>
      </div>
    );
};

export default Home;