import { useState } from 'react'
import { Profile , MarketingPage } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastCard } from './Components/index.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MarketingPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>

      <ToastCard />
    </div>
  )
}

export default App
