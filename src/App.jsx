// import { useState } from 'react'

import { Routes } from 'react-router-dom'
import './App.scss'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
