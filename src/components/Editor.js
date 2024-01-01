import React, { useState } from "react";
import "./Editor.css";
import { connect } from "react-redux";
const Editor = ({
  markdownInput,
  updateContent,
  updateCharacter,
  updateWords,
  updateTimes,
}) => {
  const [code, setCode] = useState("");
  const generateLineNumbers = () => {
    // Generate an array of line numbers based on the number of newline characters
    const lines = code?.split("\n");
    return Array.from({ length: lines.length }, (_, index) => index + 1);
  };
  const handleChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode); // Update local state
    updateContent(newCode); // Dispatch Redux action
    const numberOfCharacters = code.length;
    const words = code.split(/\s+/);
    const numberOfWords = words.length;
    const wordsPerMinute = 200;
    const readingTimeInMinutes = (code.length / (wordsPerMinute / 30)*0.01);
    const roundedValue = readingTimeInMinutes.toFixed(1);
    updateCharacter(numberOfCharacters);
    updateWords(numberOfWords);
    updateTimes(roundedValue);
  };
  return (
    <div className="editor-parent">
      <div className="linenumber-container">
        <div className="linenumber">
          {generateLineNumbers().map((lineNumber) => (
            <span key={lineNumber}>{lineNumber}</span>
          ))}
        </div>
      </div>
      <textarea
        className="code-editor"
        onChange={handleChange}
        id="editor"
        value={code}
      ></textarea>
    </div>
  );
};

const mapStateToProps = (state) => ({
  markdownInput: state.markdownInput,
  characters: state.characters,
  words: state.words,
  times: state.times,
});

const mapDispatchToProps = (dispatch) => ({
  updateContent: (content) =>
    dispatch({ type: "UPDATECONTENT", payload: content }),
  updateCharacter: (count) =>
    dispatch({ type: "UPDATE_CHARACTER_COUNT", payload: count }),
  updateWords: (countWord) =>
    dispatch({ type: "UPDATE_WORD_COUNT", payload: countWord }),
  updateTimes: (time) =>
    dispatch({ type: "UPDATE_READING_TIME", payload: time }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
