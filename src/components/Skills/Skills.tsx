import React from "react";
import { skills } from "../../Content/skills";

export default function Skills() {
  return (
    <div className="text-center py-16 " id="Skills-section">
      <h2 className="text-3xl font-bold text-PrimaryBase mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-lg text-white">
            <span className="text-xl">{React.createElement(skill.icon)}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

