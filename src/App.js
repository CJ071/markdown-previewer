import React from 'react'
import {useState} from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';


const defaultMarkup=`
# Heading 1

## Sub Header 2

[Link to Google](https://www.google.com/)

Inline code: \`console.log("Hello, world!");\`

Code block:

const addNumbers = (a, b) => {
return a + b;
};


markdown
Copy code

List:
- Item 1
- Item 2
- Item 3

Blockquote:
> This is a blockquote.

Image:
![Sample Image](https://via.placeholder.com/300)

**Bolded Text**`









function App() {
  const [words, setWords] = useState(defaultMarkup);
  return (
   <div>
      <Header/>
    <Editor words={words} setWords={setWords}/>
    <h1>Previewer</h1>
    <Previewer words={words}/>
  
    </div>
  );
}

export default App;
