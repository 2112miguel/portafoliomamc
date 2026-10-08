import { skillPyramid } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden px-6 py-20 pb-32 md:px-10"
    >
      <SkillText />

      <div className="mt-4 flex w-full max-w-5xl flex-col items-center gap-4 sm:gap-5">
        {skillPyramid.map((row, rowIndex) => (
          <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-5" key={rowIndex}>
            {row.map((skill, skillIndex) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                index={skillPyramid
                  .slice(0, rowIndex)
                  .reduce((total, previousRow) => total + previousRow.length, 0) + skillIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
