import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className = 'about--Outer'>
      <div className='section--header'>
        About
      </div>
      <div className='about--cards'>
        <div className='about--desc green'>
          Hi, I'm Sean 👋! <br/>
          <br />
          <div className='pfp'>
            I am a 3rd year computer science and mathematics student at the University of British Columbia.
          </div>
        </div>
        
        <div className='about--desc blue'>
          When I'm not coding, I like to:<br /><br />
          🧗 Climb<br />
          🏂 Snowboard<br />
          🎮 Play video games

        </div>
        <div className='about--desc purple'>
          Let's Connect! <br /><br /><br />
          📌 <a href="mailto: seanwoo@student.ubc.ca">Email</a><br />
          📌 <a href="https://github.com/Kiroves">Github</a><br />
          📌 <a href="https://www.linkedin.com/in/seanwoo-ubc">LinkedIn</a>

        </div>
      </div>
    </div>
  )
}

export default About
