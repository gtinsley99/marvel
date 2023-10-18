import React, { useState } from 'react';
import "./Modal/modal.css"
import { UpdateProfPic } from '../utils';

function ProfilePicChanger(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  function changeHandler(event) {
    event.preventDefault();

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setSelectedImage(dataURL);
      };

      reader.readAsDataURL(file);
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (selectedImage) {
      // Now you can set the selectedImage to the parent component
      UpdateProfPic(props.cookies.jwt_token, selectedImage, props.setUserPic);
      props.setFile(selectedImage);
      props.setModal(false);
    }
  }

  return (
    <div className='Picture'>
      <form onSubmit={submitHandler}>
      <label htmlFor="file-upload" className="formButton" id='fileButton'>
        Upload jpg file
      </label>
        <input type="file" accept='image/jpeg' name='avatar' onChange={changeHandler} id='file-upload' />
        <button className='formButton' type="submit">Upload</button>
      </form>
     
    </div>
  );
};

export default ProfilePicChanger;
