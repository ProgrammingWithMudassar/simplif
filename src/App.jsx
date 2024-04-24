import { useState } from 'react'
import { Home, MarketingPage } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MarketingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
