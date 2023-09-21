import React from 'react'
import Skills from './Skills';

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "Blue",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Flask",
    level: "intermediate",
    color: "grey",
  },
  {
    skill: "HTML/CSS",
    level: "advanced",
    color: "green",
  },
  {
    skill: "TailwindCSS",
    level: "advanced",
    color: "blue",
  },
];


function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => <Skills skill={skill.skill} color={skill.color} level={skill.level} />)}
    </div>
  );
}

export default SkillList