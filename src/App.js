import React, { useState } from 'react'
import './App.css'
import Flower from './components/Flower'
import ColorPalette from './components/ColorPalette'

const App = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
      <div className="title">React web App</div>
      <div className= "flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <div className="resources">
        <span>Digital Coloring book by <a className="link" href="https://uxdesign.cc/5-steps-to-create-a-simple-digital-coloring-book-in-react-3d4f5b2af822">Alison Quaglia</a> on <a className="link" href="https://github.com/hylobates-lar/color-test">Github</a></span>
      </div>
    </div>
  )
}

export default App
