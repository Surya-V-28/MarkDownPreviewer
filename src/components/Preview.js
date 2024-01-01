

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
import { marked } from 'marked';

const Preview = ({ markdownInput }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState('');

  useEffect(() => {
    // Use marked.js to render the markdown content
    setRenderedMarkdown(marked(markdownInput));
  }, [markdownInput]);

  return (
    <>
    <div className="preview-editor-title-1"> 
    <p>Preview</p>
    <p>V</p>
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
