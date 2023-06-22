import React from 'react';
import { useRef } from 'react';
import { useScreenshotToClipboard } from 'use-screenshot-to-clipboard';

const App = () => {
  const ref = useRef(null);
  const [makeCopyToClipboard, _] = useScreenshotToClipboard({ quality: 1 });
  return (
    <div ref={ref}>
      <table>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </table>
      <button onClick={() => makeCopyToClipboard(ref.current)}>makeCopyToClipboard</button>
    </div>
  );
};
export default App;
