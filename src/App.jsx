import axios from 'axios'
import {useState } from 'react'
import dice from './assets/images/icon-dice.svg'
import patternMobile from './assets/images/pattern-divider-mobile.svg'
import patternDesktop from './assets/images/pattern-divider-desktop.svg'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('Don\'t be afraid to ask questions.')
  const [adviceId, setAdviceId] = useState("11")
  const [isRolling, setIsRolling] = useState(false);

  const handleRollClick = () => {
    setIsRolling(true);
    getAdvice()    
    setTimeout(() => {
      setIsRolling(false);
    }, 5000);
  };
  async function getAdvice() {
   await axios.get('https://api.adviceslip.com/advice').then((response) => {
      setAdvice(response.data.slip.advice)
      setAdviceId(response.data.slip.id)
    })
  }
  return (
    <div className="container">
      <div className="content">
        <h1>Advice #{adviceId} </h1>
        <p>{advice}</p>
        <img src={patternMobile} alt="pattern" className='pattern pattern-mobile'/>
        <img src={patternDesktop} alt="pattern" className='pattern pattern-desktop' />
        <div className='dice-border'>
          <img src={dice} alt="dice" onClick={handleRollClick} className={isRolling ? 'rolling' : ''}/>
        </div>
      </div>
    </div>
  )
}

export default App