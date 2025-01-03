import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import AppPreview from './Pages/AppPreview';
import Comments from './Pages/Comments';

function App() {

  const homeRef = useRef(null);
  const appRef = useRef(null);
  const commentsRef = useRef(null);
  /*const statsRef = useRef(null);
  const downloadRef = useRef(null);*/

  const sections = {
    home: homeRef,
    app: appRef,
    comments: commentsRef,
    /*stats: statsRef,
    download: downloadRef,*/
  };

  return (
    <div className="w-full">
      <Navbar sections={sections} />
      <div ref={homeRef}>
        <LandingPage />
      </div>
      <div ref={appRef}>
        <AppPreview />
      </div>
      <div ref={commentsRef} className='p-8'>
        <Comments />
      </div>
    </div>
  );
}

export default App;
