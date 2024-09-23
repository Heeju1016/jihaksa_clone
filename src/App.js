import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../src/components/Main.jsx'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App