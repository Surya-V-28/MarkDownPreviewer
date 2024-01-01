

// import React from 'react'
import './Preview.css'
// 
// import remarkGfm from 'remark-gfm'
// import ReactMarkdown from 'react-markdown';
// import rehypeHighlight from 'rehype-highlight';

// const Preview = ({ markdownInput }) => {
//     // const renderMarkdown = () => {
//     //     const marked = require('marked');
//     //     return { __html: marked(markdownInput) };
//     //   };

//   return (
//     <>
//    <div id="preview"  className="preview-container">
//      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{markdownInput}</ReactMarkdown> </div>
//      </>
//   )
// }

// const mapStateToProps = (state) => ({
//     markdownInput: state.markdownInput,
//   });
  
//   export default connect(mapStateToProps, null)(Preview);


import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import marked  from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const Preview = ({ markdownInput }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState('');
  
var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}
marked.setOptions({
  renderer,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true
});

  useEffect(() => {
    // Use marked.js to render the markdown content
    setRenderedMarkdown(marked(markdownInput));
    console.log("loaded");
  }, [markdownInput]);

  return (
    <>
    <div className="preview-editor-title-1"> 
    <p>Preview</p>
    <p>U</p>
    </div>
    <div className="preview-container" id="preview">

      {/* Render the content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  markdownInput: state.markdownInput,
});

export default connect(mapStateToProps, null)(Preview);

