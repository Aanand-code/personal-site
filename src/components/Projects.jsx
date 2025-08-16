import Reveal from '../animation/Reveal';

const Projects = () => {
  return (
    <div className="my-5 p-2 flex flex-row gap-2">
      <div className=" w-[30%] flex justify-center p-4">
        <h2 className="text-md font-medium">Projects</h2>
      </div>
      <div className=" p-2 w-[70%] flex flex-col gap-6">
        <Reveal>
          <a
            className="flex flex-row justify-between items-center gap-15 w-full"
            href="#section"
            target="_blank"
          >
            <div className="w-[50%]">
              <ul>
                <li className="list-disc font-medium text-md">Personal Site</li>
              </ul>
              <p className="px-3 font-light  text-sm">
                An interactive developer portfolio featuring Spotify API
                integration to showcase both technical skills and musical taste.
              </p>
            </div>
            <div className="flex flex-wrap mt-2 gap-2 w-[50%]">
              <p className="bg-cyan-600 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                React
              </p>
              <p className="bg-yellow-300 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Javascript
              </p>
              <p className="bg-green-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Node.js
              </p>
              <p className="bg-gray-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Express.js
              </p>

              <p className="bg-sky-600 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Tailwind
              </p>
              <p className="bg-green-600 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Spotify API
              </p>
            </div>
          </a>
        </Reveal>
        <Reveal>
          <a
            className="flex flex-row justify-between items-center gap-18 w-full"
            href="https://webrtc-video-chat-90pv.onrender.com/"
            target="_blank"
          >
            <div className="w-[50%]">
              <ul>
                <li className="list-disc font-medium text-md">
                  Video chat app
                </li>
              </ul>
              <p className="px-3 font-light  text-sm">
                Browser-based P2P video conferencing using WebRTC for media
                streaming and WebSockets for signaling coordination.
              </p>
            </div>
            <div className="flex flex-wrap mt-2 gap-2 w-[50%]">
              <p className="bg-yellow-300 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Javascript
              </p>
              <p className="bg-green-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Node.js
              </p>
              <p className="bg-orange-400 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                WebRTC
              </p>
              <p className="bg-gray-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Express.js
              </p>
              <p className="bg-rose-600 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                WebSocket API
              </p>
            </div>
          </a>
        </Reveal>
        <Reveal>
          {' '}
          <a
            className="flex flex-row justify-between items-center gap-18 w-full"
            href="https://real-time-collaborative-whiteboard-uove.onrender.com"
            target="_blank"
          >
            <div className="w-[50%]">
              <ul>
                <li className="font-medium list-disc text-md text-nowrap">
                  Real-time collaborative <br />
                  whiteboard
                </li>
              </ul>
              <p className="px-3 font-light  text-sm">
                An interactive live whiteboard powered by Canvas API for smooth
                drawing and WebSocket API for real-time collaboration, enabling
                multiple users to edit simultaneously.
              </p>
            </div>
            <div className="flex flex-wrap mt-2 gap-2 w-[50%]">
              <p className="bg-yellow-300 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Javascript
              </p>
              <p className="bg-green-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Node.js
              </p>
              <p className="bg-blue-400 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Canvas API
              </p>
              <p className="bg-gray-500 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                Express.js
              </p>
              <p className="bg-rose-600 py-1.5 px-4 w-fit rounded-2xl text-[0.7rem]">
                WebSocket API
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
