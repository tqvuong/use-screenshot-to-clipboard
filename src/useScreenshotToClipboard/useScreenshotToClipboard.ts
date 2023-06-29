import { useState } from 'react';
import { _htmlToBlob, _copyBlobToClipboard } from '../utils';

interface ScreenshotToClipboard {
    type?: string;
    quality?: number;
    scale?: number;
}

export const useScreenshotToClipboard = ({ type = 'image/png', quality = 1, scale = 12 }: ScreenshotToClipboard) => {
    const [error, setError] = useState(null);
    const makeCopyToClipboard = (node: HTMLElement) =>
        _htmlToBlob(node, type, quality, scale).then(_copyBlobToClipboard).catch(setError);

    return [makeCopyToClipboard, error];
};
