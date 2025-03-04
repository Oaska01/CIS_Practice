// import { useState } from 'react'
import './App.css'
import Sidebar from './Components/SideBar'
import Top from './Components/Top'
import EnterName from './Components/EnterName'
// import pic from './Components/Pic'
// import catIm from './Components/cat-im'

function App() {

  return (
    <>
      <div>
        <Top/>

        <Sidebar />
      </div>

      <div className='promptName'>
        <EnterName />
      </div>

    </>
  )
}

export default App
