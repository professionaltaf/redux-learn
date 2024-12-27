import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User'

//import './App.css'

function App() {
  
  return (
     <div className='app font-medium'>
      <User data={{name:"altaf raza", age:"20"}}></User>
    </div>
    
      
  )
}

export default App
