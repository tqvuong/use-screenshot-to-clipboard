# use-screenshot-to-clipboard

> Make clipboard image from React Element

[![NPM](https://img.shields.io/npm/v/use-screenshot-to-clipboard.svg)](https://www.npmjs.com/package/use-screenshot-to-clipboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-screenshot-to-clipboard

or

yarn add --save use-screenshot-to-clipboard
```

## Usage

```tsx
import React from 'react';
import { useRef } from 'react';
import { useScreenshotToClipboard, useScreenshot } from 'use-screenshot-to-clipboard';

const makeId = length => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};

const App = () => {
    const ref = useRef(null);
    const [makeCopyToClipboard, _] = useScreenshotToClipboard({ quality: 1 });
    const [takeScreenShot, __] = useScreenshot({ quality: 1 });
    return (
        <>
            <div className='wrapper' ref={ref}>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dom</td>
                            <td>6000</td>
                        </tr>
                        <tr className='active-row'>
                            <td>Melissa</td>
                            <td>5150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='glow-on-hover' type='button' onClick={() => makeCopyToClipboard(ref.current)}>
                makeCopyToClipboard
            </button>
            <button
                className='glow-on-hover btn-right'
                type='button'
                onClick={() => takeScreenShot(ref.current, makeId(8))}
            >
                takeScreenShot
            </button>
        </>
    );
};
export default App;
```

## License

MIT © [tqvuong](https://github.com/tqvuong)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
