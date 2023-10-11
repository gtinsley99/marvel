import React from 'react';
import "./ProfileContent.css";

const ProfileContent = () => {
  return (
    <div>
          <h2 className='Username'>Username</h2>
    <div className='button-holder'>
        <button>Update Username</button>
        <button>Update Password</button>
        <button>Update Email</button>
    </div>
    </div>
  )
}

export default ProfileContent
