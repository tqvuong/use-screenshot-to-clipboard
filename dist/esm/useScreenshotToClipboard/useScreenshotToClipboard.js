import { useState } from 'react';
import { _htmlToBlob, _copyBlobToClipboard } from '../utils';
export const useScreenshotToClipboard = ({ type = 'image/png', quality = 1, scale = 12 }) => {
    const [error, setError] = useState(null);
    const makeCopyToClipboard = (node) => _htmlToBlob(node, type, quality, scale).then(_copyBlobToClipboard).catch(setError);
    return [makeCopyToClipboard, error];
};
