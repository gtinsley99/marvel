import React, { useState } from 'react';
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
     
    }
  }

  return (
    <div className='Picture'>
      <form onSubmit={submitHandler}>
        <input type="file" name='avatar' onChange={changeHandler} />
        <button type="submit">Upload</button>
      </form>
     
    </div>
  );
}

export default ProfilePicChanger;
