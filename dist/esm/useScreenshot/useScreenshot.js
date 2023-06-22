import { useState } from 'react';
import { _htmlToBlob, _downloadImage } from '../utils';
export const useScreenshot = ({ type = 'image/png', quality = 1 }) => {
    const [error, setError] = useState(null);
    const takeScreenShot = (node, nameOfDownload) => _htmlToBlob(node, type, quality)
        .then(blob => _downloadImage(blob, nameOfDownload))
        .catch(setError);
    return [takeScreenShot, error];
};
