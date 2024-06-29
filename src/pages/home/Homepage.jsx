import React from 'react'
import './homepage.css'
import CodeEditor from '../../components/CodeEditor';

function Homepage() {




  return (
    <div className="container w-full h-screen flex justify-center items-center mx-auto">

    <div className='inner-container w-full'>
    <div className='text-center pt-10 text-3xl mb-4'>Code Editor</div>
    <div className='w-full  flex justify-center'>
      <CodeEditor />
    </div>
    </div>
    </div>
  )
}

export default Homepage