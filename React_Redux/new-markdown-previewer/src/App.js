import './App.css';
import React, { useState, useMemo } from 'react';
import { marked } from 'marked';

function App() {

  const [markdownText, setMarkdownText] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:


  Heres some code, \`<div></div>\`, between 2 backticks.

  // this is multi-line code:
  \`\`\`javascript
  function anotherExample(firstLine, lastLine) {
    if (firstLine == 0 && lastLine == 0) {
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

| Wild Header | Crazy Header | Another Header? |
| ----------- | -------------| ------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);

const parsedHtml = useMemo(() => {
  return marked.parse(markdownText);
}, [markdownText]);

  return (
    <>
      <textarea id='editor'
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            placeholder="Digite suas instruções em Markdown aqui..."
          />
      <div id="preview" dangerouslySetInnerHTML={{ __html: parsedHtml }}>
        
      </div>
    </>
  );
}

export default App;
