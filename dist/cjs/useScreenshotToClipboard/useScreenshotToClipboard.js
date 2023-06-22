"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreenshotToClipboard = void 0;
var react_1 = require("react");
var utils_1 = require("../utils");
var useScreenshotToClipboard = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'image/png' : _b, _c = _a.quality, quality = _c === void 0 ? 1 : _c;
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    var makeCopyToClipboard = function (node) {
        return (0, utils_1._htmlToBlob)(node, type, quality).then(utils_1._copyBlobToClipboard).catch(setError);
    };
    return [makeCopyToClipboard, error];
};
exports.useScreenshotToClipboard = useScreenshotToClipboard;
