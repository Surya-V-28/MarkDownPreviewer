import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { Provider } from "react-redux";
import store from "./components/redus/store"
import NavBar from "./components/NavBar";
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <div className="markdowncontainer">
         <NavBar />
        <div className="markdown-title-container">
          <div className="mardown-editior-title">
            <p>Markdown</p>
            <p>C</p>
          </div>
          <div className="preview-editor-title">
            <p>Preview</p>
            <p>V</p>
          </div>
        </div>
        <div className='editor-container'>
          <Editor />
          <Preview />
        </div>
      </div>
    </div>
    </Provider>
  );
}


export default App;



