import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import AppPreview from './Pages/AppPreview';
import Comments from './Pages/Comments';
import Stats from './Pages/Stats';
import Download from './Pages/Download';

function App() {

  const homeRef = useRef(null);
  const appRef = useRef(null);
  const commentsRef = useRef(null);
  const statsRef = useRef(null);
  const downloadRef = useRef(null);

  const sections = {
    home: homeRef,
    app: appRef,
    comments: commentsRef,
    stats: statsRef,
    download: downloadRef,
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
      <div ref={statsRef} className='p-8 md:mt-0 mt-96'>
        <Stats />
      </div>
      <div ref={downloadRef} className='p-8 md:mt-0 mt-96'>
        <Download />
      </div>
    </div>
  );
}

export default App;
