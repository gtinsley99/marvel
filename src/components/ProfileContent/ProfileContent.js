import React from 'react';
import { useState } from 'react';
import "./ProfileContent.css";
import Modal from './Modal/Modal';

const ProfileContent = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(null);
  const [res, setRes] = useState(null);

  const handleClick = (e) => {
      setForm(e.target.value)
      setShowModal(true);
      setRes(null);
  }
  return (
    <div>
          <h2 className='Username'>Welcome user: {props.user}</h2>
    <div className='button-holder'>
        <button value="username" onClick={handleClick} >Update Username</button>
        <button value="password" onClick={handleClick} >Update Password</button>
        <button value="email" onClick={handleClick} >Update Email</button>
        <button value="delete" onClick={handleClick} >Delete account</button>
    </div>
    {showModal && <Modal setRes={setRes} res={res} setShowModal={setShowModal} form={form} cookies={props.cookies} setCookie={props.setCookie} setUser={props.setUser} setLoggedIn={props.setLoggedIn} />}
    </div>
  )
}

export default ProfileContent
