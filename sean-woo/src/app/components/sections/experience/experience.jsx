import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <>
      <span className="anchor" id="exp"></span>
      <div className='section--header'>
        Experience
      </div>
      <div className="exp--outer">
        <div className="work-grid">
          <div className="work--item work--item__full">
            <h3>University of British Columbia</h3>
            <span>Sept 2022 - Dec 2023</span>
            <hr></hr>
            <h4>Teaching Assistant</h4>
            <ul>
            <li>Led weekly programming/mathematics labs for CPSC 110 (Computation, Programs, and Programming), MATH 110 (Differential Calculus), and MATH 100 (Differential Calculus with Applications).</li>
            <li>Supervised labs for over 100 undergraduate students, offering guidance during labs and feedback on problem sets.</li>
            <li>95% student satisfaction on the Student Experience of Instruction survey.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default experience
