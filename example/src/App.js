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
