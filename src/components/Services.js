import React from 'react';

import Express from "/home/huey/portfolio-jn/src/ASsets/express.png";
import Git from "/home/huey/portfolio-jn/src/ASsets/git.png";
import Mongodb from "/home/huey/portfolio-jn/src/ASsets/mongodb.png";
import Next from "/home/huey/portfolio-jn/src/ASsets/nexxt.png";
import Nord from "/home/huey/portfolio-jn/src/ASsets/nord.png";
import Reactpng from "/home/huey/portfolio-jn/src/ASsets/react.png";
import Tailwindcss from "/home/huey/portfolio-jn/src/ASsets/tailwindcss.png";

function Services() {
  const skills = [
    { name: 'Git', logo: Git },
    { name: 'Express', logo: Express },
    { name: 'Mongodb', logo: Mongodb },
    { name: 'Next', logo: Next },
    { name: 'Nord', logo: Nord },
    { name: 'React', logo: Reactpng },
    { name: 'Tailwindcss', logo: Tailwindcss },
  ];

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center flex-col border border-gray-300">
            <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4" />
            <h2 className="text-lg font-bold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
