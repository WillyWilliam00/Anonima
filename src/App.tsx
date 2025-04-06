
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'




function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='/chatRoom'/>
        <Route path='/createStaticID'/>
      </Routes>
      </BrowserRouter>
       
  )
}

export default App
