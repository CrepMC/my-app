// import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Detail from './components/Detail/Detail'
import Container from './components/Container/Container'

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Detail />
      <Container />
    </div>
  )
}

export default App