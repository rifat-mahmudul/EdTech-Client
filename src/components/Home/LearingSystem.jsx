import { FaArrowDown } from "react-icons/fa";
import Title from "../share/Title";
import learningImg from '../../assets/learning.png'

const LearningSystem = () => {
  const features = [
    {
      title: "Interactive Live & Recording Classes",
      description:
        "Learn something new every day by watching recorded conceptual classes and joining live classes for doubt clearing.",
    },
    {
      title: "Module Based Study Plan",
      description:
        "No chance of falling behind with a structured module-wise study plan packed with quizzes, assignments & practice homework.",
    },
    {
      title: "Conceptual Crash Course",
      description:
        "Not just a course enrollment, but a mission to learn lifelong programming skills with expert guidance.",
    },
    {
      title: "Freelancing & Job Placement Guide",
      description:
        "Serious learners get freelancing guides and job placement support from zero to career success.",
    },
    {
      title: "Learning Process Track Record",
      description:
        "Track your progress in real time, see your leaderboard position, and stay ahead in the competition.",
    },
    {
      title: "Unlimited Support",
      description:
        "Get continuous assistance and mentorship throughout your learning journey.",
    },
  ];

  return (
    <section className="max-w-[90%] xl:max-w-[1150px] mx-auto pt-24">
    
        <div className="mb-14">
            <Title title={"Productive Learning Process"}></Title>
        </div>

      <div className=" text-white shadow-lg flex flex-col md:flex-row">

        <div className="flex-1 space-y-10 border-l-2 border-gray-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative pl-8 "
            >
              <div className="absolute -left-5  top-1 flex items-center justify-center w-10 h-10  rounded-full border border-blue-500 bg-[#020617]">
                <FaArrowDown className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src={learningImg}
            alt="Learning Illustration"
            className="w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningSystem;
