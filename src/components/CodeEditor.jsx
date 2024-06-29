// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'

import Prism from 'prismjs'

const sampleText = 

`import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

function CodeEditor() {
    const [text, setText] = useState(sampleText);
    const [areaText, setAreaText] = useState(sampleText);
  
    const textareaRef = useRef(null);
    useEffect(()=>{
      if(typeof window !== undefined){
        Prism.highlightAll();
      }
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    },[text]);
    
  const handleChange = (event) => {
      let val = event.target.value;
      setAreaText(val);
    if(val.length>1 && val.charCodeAt(val.length-1)==10 ){
      setText(event.target.value+'\n');
    }
    else setText(event.target.value);
  };
  return (
    <div className='w-full max-w-[600px] h-[500px] relative overflow-y-auto mx-4'>
      <pre className='absolute top-0 w-full min-h-[200px]  m-0  shadow-md'>
        <code className={`language-js m-0`}>{text}</code>
      </pre>
      <textarea spellCheck='false' value={areaText} onChange={(e)=>{handleChange(e);console.log("called",e.target.value.charCodeAt(e.target.value.length-1))}}
       ref={textareaRef}
       style={{resize: 'none',WebkitTextFillColor: 'transparent', fontFamily:"Consolas, Monaco, 'Andale Mono', monospace"}} 
       className='w-full min-h-[200px]  absolute p-4  leading-normal over bg-transparent text-white outline-none'
       >
      
      </textarea>
    </div>
  )
}

export default CodeEditor