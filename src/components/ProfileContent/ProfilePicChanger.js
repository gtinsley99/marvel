import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function ProfilePicChanger(props){
  const [file, setFile] = useState();

  function changeHandler (event) {
   event.preventDefault()
   props.setFile(`./ProfileImg/${event.target.files[0].name}`)
   console.log(`./ProfileImg/${event.target.files[0].name}`);
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log(props.file);
    
  }



return (
  <div className='Picture'>
    <form onSubmit={submitHandler}>
    <input type="file" onChange={changeHandler}>
      </input>
      <button type="submit">
       Upload
      </button>
      </form>
    </div> 
    )}


export default ProfilePicChanger;