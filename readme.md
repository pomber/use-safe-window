# use-safe-window

Install

```bash
npm install use-safe-window
```

Use

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { useSafeWindow } from "use-safe-window";

function App() {
  // origin will be `undefined` on the server
  const origin = useSafeWindow(window => window.location.origin);

  // [800, 450] on the server, replaced by the values from window on the client
  const [width, height] = useSafeWindow(
    window => [window.innerHeight, window.innerHeight],
    [800, 450]
  );

  return (
    <div>
      {origin} - {width} x {height}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Why

I get the same error in every server-side rendered React project:

> `ReferenceError: window is not defined`

I got tired and published the code to npm.

The hook is just:

```js
function useSafeWindow(fn, def) {
  return typeof window !== "undefined" ? fn(window) : def;
}
```

Well, it's probably not even a hook but safe-window was already taken in npm 🤷

## MIT License

Copyright (c) 2020 Rodrigo Pombo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
