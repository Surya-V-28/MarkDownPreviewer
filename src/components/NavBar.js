

import '../App.css'
import React from 'react'
import { connect } from 'react-redux';
const NavBar = ({characters,words, times }) => {
  return (
    <>
    <div className="title-container">
    <p className="title"> Document MarkDown</p>
    <div className="right-title-contianer">
      <p className="words">
        READING TIME: <b>{times} MIN</b>
      </p>
      <p className="words">
        WORDS : <b>{words}</b>
      </p>
    </div>
  </div>
  <div className="document-title-container">
    <p className="document-title">Untitled document.md</p>
    <p className="words">
      CHARACTERS : <b>{characters}</b>
    </p>
  </div>
  </>
  )
}

const mapStateToProps = (state) => ({
    markdownInput: state.markdownInput,
    characters: state.characters,
    words: state.words,
    times: state.times,
  });

export default connect(mapStateToProps, null)(NavBar)