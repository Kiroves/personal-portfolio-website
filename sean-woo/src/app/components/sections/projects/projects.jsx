import React from 'react'
import './projects.css'
const Projects = () => {
    return (
        <>
            <span className="anchor"></span>
            <div className='section--header projects' id='proj'>
                Projects
            </div>
            <div className="bean">
                <div id="cards">
                    <div className="card" data-color="yellow">
                        <div className='project-title'>BThere</div>
                        <a target="_blank" href="https://devpost.com/software/bthere-hobi6k">
                            <img className="card-front-image card-image" src="./bthere.png" alt="BThere" />
                        </a>
                        <div className="card-faders">
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />                           
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />
                            <img className="card-fader card-image" src="./bthere.png" alt="bthere" />                    
                            </div>
                        <div className='stack'>
                            <div className='stack-entry'>React</div>
                            <div className='stack-entry'>JavaScript</div>
                            <div className='stack-entry'>Python</div>
                            <div className='stack-entry'>Flask</div>
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>HTML</div>
                            <div className='stack-entry'>TailwindCSS</div>
                            <div className='stack-entry'>Firebase</div>
                        </div>
                    </div>
                    <div className="card" data-color="green">
                        <div className='project-title'>EcoGlo</div>
                        <a target="_blank" href="https://devpost.com/software/ecoglo">
                        <img className="card-front-image card-image" src="./ecoglo.png" alt="Ecoglo" /> 
                        </a>
                        <div className="card-faders">
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                            <img className="card-fader card-image" src="./ecoglo.png" alt="Ecoglo" />
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>React</div>
                            <div className='stack-entry'>JavaScript</div>
                            <div className='stack-entry'>TypeScript</div>
                            <div className='stack-entry'>HTML</div>
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>CSS</div>
                        </div>
                    </div>
                </div>
                <div id="cards">
                    <div className="card" data-color="blue">
                        <div className='project-title'>SleepCode</div>
                        <a target="_blank" href="https://sleep-code.vercel.app/">
                            <img className="card-front-image card-image" src="./sleepcode.png" />
                        </a>
                        <div className="card-faders">
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                            <img className="card-fader card-image" src="./sleepcode.png" />
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>React</div>
                            <div className='stack-entry'>TypeScript</div>
                            <div className='stack-entry'>TailwindCSS</div>
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>Firebase</div>
                        </div>
                    </div>
                    <div className="card" data-color="brown">
                        <div className='project-title'>Brain Stroke Prediction</div>
                        <a target="_blank" href="https://github.com/Kiroves/Brain-Stroke-Prediction">
                        <img className="card-front-image card-image" src="./brain.png" />
                        </a>
                        <div className="card-faders">
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                            <img className="card-fader card-image" src="./brain.png" />
                        </div>
                        <div className='stack'>
                            <div className='stack-entry'>Python</div>
                            <div className='stack-entry'>Jupyter</div>
                            <div className='stack-entry'>Pandas</div>
                            <div className='stack-entry'>Scikit-learn</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
