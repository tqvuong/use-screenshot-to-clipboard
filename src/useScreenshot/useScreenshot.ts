import { useState } from 'react';
import { _htmlToBlob, _downloadImage } from '../utils';

interface Screenshot {
    type?: string;
    quality?: number;
}

export const useScreenshot = ({ type = 'image/png', quality = 1 }: Screenshot) => {
    const [error, setError] = useState(null);
    const takeScreenShot = (node: HTMLElement, nameOfDownload: string) =>
        _htmlToBlob(node, type, quality)
            .then(blob => _downloadImage(blob, nameOfDownload))
            .catch(setError);
    return [takeScreenShot, error];
};
