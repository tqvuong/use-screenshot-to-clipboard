import { useState } from 'react';
import { _htmlToBlob, _copyBlobToClipboard } from '../utils';

interface ScreenshotToClipboard {
  type?: string;
  quality?: number;
}

export const useScreenshotToClipboard = ({ type = 'image/png', quality = 1 }: ScreenshotToClipboard) => {
  const [error, setError] = useState(null);
  const makeCopyToClipboard = (node: HTMLElement) =>
    _htmlToBlob(node, type, quality).then(_copyBlobToClipboard).catch(setError);

  return [makeCopyToClipboard, error];
};
