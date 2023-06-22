import html2canvas from 'html2canvas';

export const _copyBlobToClipboard = (blob: Blob): Promise<void> => {
  const items = { [blob.type]: blob } as unknown as Record<string, ClipboardItemData>;

  const clipboardItem = new ClipboardItem(items);
  return navigator.clipboard.write([clipboardItem]);
};

export const _downloadImage = (blobImage: Blob, nameOfDownload = 'image.png') => {
  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
};

export const _htmlToBlob = (node: HTMLElement, type: string, quality: number): Promise<Blob> => {
  if (!node) {
    throw new Error('You should provide correct html node.');
  }

  return html2canvas(node).then(canvas => {
    if (!canvas) {
      throw new Error('canvas is not valid');
    }

    const croppedCanvas = document.createElement('canvas');
    const croppedCanvasContext = croppedCanvas.getContext('2d');
    if (!croppedCanvasContext) {
      throw new Error('croppedCanvasContext is not valid');
    }

    const cropPositionTop = 0;
    const cropPositionLeft = 0;
    const cropWidth = canvas.width;
    const cropHeight = canvas.height;

    croppedCanvas.width = cropWidth;
    croppedCanvas.height = cropHeight;

    croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

    return new Promise((resolve, reject) => {
      croppedCanvas.toBlob(
        _blob => {
          if (_blob) {
            resolve(_blob);
          } else {
            reject(new Error('Cannot get blob from image element'));
          }
        },
        type,
        quality
      );
    });
  });
};
