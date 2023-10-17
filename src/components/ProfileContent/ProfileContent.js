import React, { useState } from 'react';
import './ProfileContent.css';
import Modal from './Modal/Modal';
import { UserOutlined } from '@ant-design/icons';
import { Avatar} from 'antd';
import ProfilePicChanger from './ProfilePicChanger';



const ProfileContent = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(null);
  const [res, setRes] = useState(null);
  const [file, setFile] = useState();

  const handleClick = (e) => {
    console.log(file);
    setForm(e.target.value);
    setShowModal(true);
    setRes(null);
   
  };

  return (
    <div>
      <h2 className='Username'>Welcome user: {props.user}</h2>
      <Avatar className='profilepicture'src={props.userPic} size={150} icon={<UserOutlined />} />
       <ProfilePicChanger setFile={setFile} file={file} cookies={props.cookies} setUserPic={props.setUserPic} userPic={props.userPic} />
      <div className='button-holder'>           
        <button value="username" onClick={handleClick} >Update Username</button>
        <button value="password" onClick={handleClick} >Update Password</button>
        <button value="email" onClick={handleClick} >Update Email</button>
        <button value="delete" onClick={handleClick} >Delete account</button>
      </div>
      {showModal && (
        <Modal
          setRes={setRes}
          res={res}
          setShowModal={setShowModal}
          form={form}
          cookies={props.cookies}
          setCookie={props.setCookie}
          setUser={props.setUser}
          setLoggedIn={props.setLoggedIn}
        />
      )}

    </div>
  );
};

export default ProfileContent;

