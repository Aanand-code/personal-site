import Reveal from '../animation/Reveal';

const timelines = [
  {
    id: 1,
    degree: 'Master of Computer Application',
    from: '2023-2025',
    college: 'Chandigarh Group of Colleges, Jhanjeri',
    university: 'Affiliated to Punjab Technical University, Kapurthala',
    desc: 'got my degree to make my parents proud',
    color: 'bg-green-500',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Physics',
    from: '2020-2023',
    college: 'Netaji Subhash Chandra Bose Memorial, Govt. College Hamirpur',
    university: 'Affiliated to Himachal Pradesh University, Shimla',
    desc: 'wanted to be a graduate student',
    color: 'bg-yellow-400',
  },
];

const Timeline = () => {
  return (
    <>
      <div className="my-5 p-2 flex flex-row gap-2">
        <div className=" w-[30%] flex justify-center p-4">
          <h2 className="text-md font-medium">Timeline</h2>
        </div>
        <div className=" p-2 w-[70%] flex flex-col">
          {timelines.map((timeline) => (
            <Reveal>
              <div key={timeline.id} className="flex w-full">
                <div className=" flex flex-row  gap-5 w-full">
                  <div className="flex flex-col items-center">
                    <div className="border-l-gray-700 border-l-1 h-5 "></div>
                    <div
                      className={`w-[15px] h-[20px] my-0.5 rounded-[50%] border-3 border-gray-800 
                      ${timeline.color}`}
                    ></div>
                    <div className="border-l-gray-700 border-l-1 h-full "></div>
                  </div>
                  <div className="flex flex-col gap-0.5 mt-2 mb-2 w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <h3 className="font-medium text-lg">{timeline.degree}</h3>
                      <p className="text-xs ">{timeline.from}</p>
                    </div>
                    <h4 className="font-medium t text-sm">
                      {timeline.college}
                    </h4>
                    <i>
                      <h4 className="font-medium  text-sm">
                        {timeline.university}
                      </h4>
                    </i>
                    <ul className=" ml-2">
                      <li className="font-light text-sm list-disc text-gray-600/70">
                        {timeline.desc}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
