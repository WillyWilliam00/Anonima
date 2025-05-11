
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import ChatRoom from './components/ChatRoom'




function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<ChatRoom/>}/>
        <Route path='/createStaticID' element={<div>createStaticID Page</div>}/>
      </Routes>
      </BrowserRouter>  
       
  )
}

export default App
