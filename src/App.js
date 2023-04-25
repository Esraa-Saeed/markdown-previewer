import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  function onTyping(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <div className="editor">
        <header>
          <div className="left-header">
            <i class="fa-brands fa-free-code-camp"></i>
            <span>Editor</span>
          </div>
          <i class="fa-solid fa-maximize"></i>
        </header>
        <textarea
          id="editor"
          onInput={onTyping}
          value={text}
          autoFocus
        ></textarea>
      </div>
      <div className="previewer">
        <header>
          <div className="left-header">
            <i class="fa-brands fa-free-code-camp"></i>
            <span>Previewer</span>
          </div>
          <i class="fa-solid fa-maximize"></i>
        </header>
        <article
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></article>
      </div>
    </div>
  );
}

export default App;
