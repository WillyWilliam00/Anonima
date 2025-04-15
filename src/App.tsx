
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import ChatRoom from './pages/ChatRoom'
import Finestra from './components/Finestra'

function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Finestra><ChatRoom/></Finestra>
         }/>
        <Route path='/login'/>
        <Route path='/createStaticID'/>
      </Routes>
      </BrowserRouter>
       
  )
}

export default App
