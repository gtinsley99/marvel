import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splashScreen.js';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        setTimeout(() => {
            setLoading(false)  
        }, 3000)
  },[]);

  return (
    <div className="App">
      {loading ? <SplashScreen /> : (
      <div className='homepage'>
        <Homepage />
      </div>
      )}
    </div>
  );
}

export default App;
