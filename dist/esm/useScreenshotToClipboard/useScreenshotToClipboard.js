import { useState } from 'react';
import { _htmlToBlob, _copyBlobToClipboard } from '../utils';
export const useScreenshotToClipboard = ({ type = 'image/png', quality = 1 }) => {
    const [error, setError] = useState(null);
    const makeCopyToClipboard = (node) => _htmlToBlob(node, type, quality).then(_copyBlobToClipboard).catch(setError);
    return [makeCopyToClipboard, error];
};
