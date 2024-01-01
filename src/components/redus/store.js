/* eslint-disable default-case */

 
import {createStore } from 'redux'



// Rest of your code...

const markdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Use `markdownContent` in your React component...



const UPDATECONTENT = 'UPDATECONTENT';
const UPDATECHARACTER="UPDATE_CHARACTER_COUNT";
const UPDATEWORDS = 'UPDATE_WORD_COUNT';
const UPDATETIMES = 'UPDATE_READING_TIME';
const initalizeState = {
    markdownInput:markdown, 
    characters:0,
    words:0,
    times:0,
}

const markdownReducer =(state =initalizeState, action)=> {
    switch(action.type){
        case UPDATECONTENT:
            return {...state , markdownInput:action.payload}
        case UPDATECHARACTER:
            return { ...state, characters: action.payload };
      
        case UPDATEWORDS:
            return { ...state, words: action.payload };
      
        case UPDATETIMES:
            return { ...state, times: action.payload };
        default :
        return state
    }
}


const store = createStore(markdownReducer)

export default store