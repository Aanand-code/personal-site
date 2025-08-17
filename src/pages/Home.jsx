import React from 'react';
import SpotifyCard from '../components/SpotifyCard';
import Reveal from '../animation/Reveal';
import PhotoCards from '../components/PhotoCards';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow border-b border-y-red-950 lg:border-y-green-950">
      <div className="pl-5 pt-10 w-fit flex flex-col justify-center items-center">
        <h1
          className="font-sofia text-3xl font-normal w-[236px]
    border-r-4 border-indigo-500 pr-1 overflow-hidden whitespace-nowrap
    animate-type-and-blink "
        >
          hello, Anand here
        </h1>
      </div>
      <div className="mt-3 p-1">
        <Reveal>
          <p className="text-[0.95rem] font-light text-gray-30">
            A student obsessed with how things <i>truly</i> work — grinding
            daily to earn the title
            <span className="text-sm opacity-80"> "software engineer"</span>
          </p>
        </Reveal>
      </div>
      <PhotoCards />

      <SpotifyCard />
    </div>
  );
};

export default Home;
