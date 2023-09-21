import React from 'react'

function Skills({skill, color, level }) {
  return (
    <div className='skill' style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "50%"}
      </span>
    </div>
  )
}

export default Skills