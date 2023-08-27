import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {
  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBG] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.png)`
  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la fortuna</h1>
      <Quote phrase = {quote} />
      <BtnQuote 
        setQuote = {setQuote}
        phrases = {phrases}
        setNumberBG = {setNumberBG}
      />
    </div>
  )
}

export default App
