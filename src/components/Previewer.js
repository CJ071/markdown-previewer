import Markdown from 'marked-react'

const Previewer=({words})=>{

    return(
      <div id="preview">
      <Markdown>{words}</Markdown>
   </div>
    )
  }

  export default Previewer