const Editor=({words,setWords})=>{
 
    return(
      
      <div id="editor-container">
        <h1>Editor</h1>
   <textarea value={words} name="textarea" id="editor" cols="70" rows="15" onChange={e=>setWords(e.target.value)}/>
   </div>
    )
  }

  export default Editor