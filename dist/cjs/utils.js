"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._htmlToBlob = exports._downloadImage = exports._copyBlobToClipboard = void 0;
var html2canvas_1 = __importDefault(require("html2canvas"));
var _copyBlobToClipboard = function (blob) {
    var _a;
    var items = (_a = {}, _a[blob.type] = blob, _a);
    var clipboardItem = new ClipboardItem(items);
    return navigator.clipboard.write([clipboardItem]);
};
exports._copyBlobToClipboard = _copyBlobToClipboard;
var _downloadImage = function (blobImage, nameOfDownload) {
    if (nameOfDownload === void 0) { nameOfDownload = 'image.png'; }
    var href = URL.createObjectURL(blobImage);
    var anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
};
exports._downloadImage = _downloadImage;
var _htmlToBlob = function (node, type, quality, scale) {
    if (!node) {
        throw new Error('You should provide correct html node.');
    }
    return (0, html2canvas_1.default)(node, {
        scale: scale,
    }).then(function (canvas) {
        if (!canvas) {
            throw new Error('canvas is not valid');
        }
        var croppedCanvas = document.createElement('canvas');
        var croppedCanvasContext = croppedCanvas.getContext('2d');
        if (!croppedCanvasContext) {
            throw new Error('croppedCanvasContext is not valid');
        }
        var cropPositionTop = 0;
        var cropPositionLeft = 0;
        var cropWidth = canvas.width;
        var cropHeight = canvas.height;
        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;
        croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);
        return new Promise(function (resolve, reject) {
            croppedCanvas.toBlob(function (_blob) {
                if (_blob) {
                    resolve(_blob);
                }
                else {
                    reject(new Error('Cannot get blob from image element'));
                }
            }, type, quality);
        });
    });
};
exports._htmlToBlob = _htmlToBlob;
