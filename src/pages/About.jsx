import React from 'react';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';

const About = () => {
  return (
    <div className="flex flex-col flex-grow border-b border-y-red-950 lg:border-y-green-950">
      <div className="m-2 p-2">
        <h1 className="text-3xl font-bold">About</h1>
        <p className=" text-sm light-text">Who I am.</p>
      </div>

      <Timeline />
      <Projects />
    </div>
  );
};

export default About;
