import { useState } from 'react';
import ReactPlayer from 'react-player';

export const videoUrl = 'https://videos.ctfassets.net/cpcn7rmzq5g6/3dv5AmEoul0vAwC7ts3IIP/30453c5c51f6914a485252f9b9547acc/4_8__We_Need_to_Talk__Son_Teases_Mom_About_All_Her_Shopping_STILL_3.mp4';

export default function App() {
  const [failed, setFailed] = useState(false);
  return (
    <main aria-label="Video playback reproduction">
      <ReactPlayer width="100vw" height="100dvh" url={videoUrl} controls playing onError={() => setFailed(true)} />
      {failed && <p role="alert">Video unavailable. Check the source URL and network connection.</p>}
    </main>
  );
}
