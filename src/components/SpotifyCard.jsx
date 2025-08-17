import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SongsReveal from '../animation/SongsReveal';

const SpotifyCard = () => {
  const [section, setSection] = useState('Recently Played');
  return (
    <SongsReveal>
      <div className="w-full flex flex-col min-h-[400px]">
        <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="contact-links text-nowrap w-full text-center lg:w-fit lg:text-xl text-md px-5 lg:px-6 p-2 lg:p-2 backdrop-blur-2xl rounded-lg shadow-[23px_30px_70px_4px_rgba(0,_0,_0,_0.7)]">
            {section}
          </p>

          <nav className="flex flex-row items-center justify-end gap-1 lg:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
            <Link to="/" className="flex-1 sm:flex-none">
              <p
                onClick={() => setSection('Recently Played')}
                className="font-light bg-neutral-700/60 backdrop-blur-3xl rounded-md text-nowrap text-xs lg:text-sm px-2 lg:px-3 py-1 w-full text-center select-none touch-none"
              >
                Recently Played
              </p>
            </Link>

            <Link to="/my-library" className="flex-1 sm:flex-none">
              <p
                onClick={() => setSection('My Library')}
                className="font-light bg-neutral-700/60 backdrop-blur-3xl rounded-md text-nowrap text-xs lg:text-sm px-2 lg:px-3 py-1 w-full text-center"
              >
                My Library
              </p>
            </Link>
          </nav>
        </div>
        <div className="flex-grow flex flex-col mb-4">
          <div className="flex-grow flex flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </SongsReveal>
  );
};

export default SpotifyCard;
