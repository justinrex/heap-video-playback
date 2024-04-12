import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPlayer from 'react-player';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactPlayer
    width="100vw"
    height="100dvh"
    url="https://videos.ctfassets.net/cpcn7rmzq5g6/3dv5AmEoul0vAwC7ts3IIP/30453c5c51f6914a485252f9b9547acc/4_8__We_Need_to_Talk__Son_Teases_Mom_About_All_Her_Shopping_STILL_3.mp4"
    controls={true}
    playing={true}
  />
);
