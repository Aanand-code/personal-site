import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SongsReveal from '../animation/SongsReveal';

const SpotifyCard = () => {
  const [section, setSection] = useState('Recently Played');
  return (
    <>
      <SongsReveal>
        <div className="w-full">
          <div className="p-5   flex flex-row items-center justify-between gap-3">
            <p className=" contact-links backdrop-blur-2xl p-1.5 px-5 rounded-lg shadow-[23px_30px_70px_4px_rgba(0,_0,_0,_0.7)]">
              {section}
            </p>

            <nav className="flex flex-row items-center justify-end-safe gap-3">
              <Link to="/">
                <p
                  onClick={() => setSection('Recently Played')}
                  className="text-sm font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl rounded-md "
                >
                  Recently Played
                </p>
              </Link>

              <Link to="/my-library">
                <p
                  onClick={() => setSection('My Library')}
                  className="text-sm font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl rounded-md"
                >
                  My Library{' '}
                </p>
              </Link>
            </nav>
          </div>

          <div className="mb-4 h-[380px]">
            <Outlet />
          </div>
        </div>
      </SongsReveal>
    </>
  );
};

export default SpotifyCard;
