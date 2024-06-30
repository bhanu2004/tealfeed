// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'
import './code.css'
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
    const [codeText, setCodeText] = useState(sampleText);
    const [fieldText, setFieldText] = useState(sampleText);
    const [textHeight, setTextHeight] = useState();
  
    const textareaRef = useRef(null);
    useEffect(()=>{
      if(typeof window !== undefined){
        Prism.highlightAll();
      }
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      setTextHeight(textarea.offsetHeight);
    },[codeText]);

    
  const handleChange = (event) => {
      let val = event.target.value;
      setFieldText(val);
    if(val.length>1 && val.charCodeAt(val.length-1)==10 ){
      setCodeText(event.target.value+'\n');
    }
    else setCodeText(event.target.value);
  };
  return (
    <div className='w-full max-w-[600px] h-[500px] relative overflow-y-auto mx-4'>
      <pre className='absolute whitespace-pre-wrap top-0 w-full min-h-[200px]  m-0 code-block shadow-md'
      style={{height: `${textHeight}px`}}
      >
        <code className={`language-js w-full inline-block codeclass m-0`}>{codeText}</code>
      </pre>
      <textarea spellCheck='false' value={fieldText} onChange={(e)=>{handleChange(e);console.log("called",e.target.value.charCodeAt(e.target.value.length-1))}}
       ref={textareaRef}
       style={{resize: 'none',WebkitTextFillColor: 'transparent', fontFamily:"Consolas, Monaco, 'Andale Mono', monospace"}} 
       className='w-full min-h-[200px]  absolute p-4  leading-normal over bg-transparent text-white outline-none'
       >
      
      </textarea>
    </div>
  )
}

export default CodeEditor