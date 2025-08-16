import { useRef, useState, useEffect } from 'react';
import SongsReveal from '../animation/SongsReveal';

function MyLibrary() {
  const embedRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);
  const uri = 'spotify:playlist:6t0xB4j7iLMuhet3kWWAz7?si=4971168e89764d74';

  useEffect(() => {
    // Check if API is already loaded
    if (window.SpotifyIframeApi) {
      initializePlayer();
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;

    // Set up the ready callback
    window.onSpotifyIframeApiReady = (SpotifyIframeApi) => {
      window.SpotifyIframeApi = SpotifyIframeApi;
      initializePlayer();
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      delete window.onSpotifyIframeApi;
    };
  }, []);

  const initializePlayer = () => {
    if (!embedRef.current || !window.SpotifyIframeApi) return;

    // Required empty callback even if unused
    const emptyCallback = () => {};

    const controller = window.SpotifyIframeApi.createController(
      embedRef.current,
      {
        width: '100%',
        height: '352',
        uri: uri,
      },
      emptyCallback
    );

    setPlayerReady(true);

    return () => {
      if (controller) controller.destroy();
    };
  };

  return (
    <SongsReveal>
      <div className="relative min-h-[352px] rounded-2xl shadow-xl/60 shadow-stone-900/100">
        <div
          ref={embedRef}
          className="rounded-2xl shadow-xl/100 shadow-stone-700/80"
        />
        {!playerReady && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            Loading Spotify player...
          </div>
        )}
      </div>
    </SongsReveal>
  );
}

export default MyLibrary;
