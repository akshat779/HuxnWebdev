import { useState } from 'react'
import Accordian from './components/Accordian'
import { accordionData } from './utils/content'
import './App.css'

function App() {

  return (
    <div>
       <div className="accordion">
        {
            accordionData.map(({title,content})=> (
                <Accordian title={title}  content={content} />
            ))
        }
        </div>
    </div>
  )
}

export default App
