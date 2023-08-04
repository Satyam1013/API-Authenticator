import React, { useEffect, useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(
    `import React from "react";
    import ReactDOM from "react-dom";
    
    function App() {
      return (
        <h1>Hello world</h1>
      );
    }
    
    ReactDOM.render(<App />, document.getElementById("root"))`
  );

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

  useEffect(() => {
    import("prismjs/components/prism-javascript").then(() => {
      highlightAll();
    });
  }, []);

  const highlightAll = () => {
    (window as any).Prism = languages;
    (window as any).Prism.highlightAll();
  };

  return (
    <div>
      <h1>Code Editer</h1>
      <p>A simple no-frills code editor with syntax highlighting.</p>
      <a href="https://github.com/react-simple-code-editor/react-simple-code-editor">
        Github
      </a>
      <div style={{ width: "40%", margin: "auto", padding: 30 }}>
        <SimpleCodeEditor
          value={code}
          onValueChange={handleChange}
          highlight={(code) => highlight(code, languages.javascript)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            backgroundColor: "#f5f5f5",
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
