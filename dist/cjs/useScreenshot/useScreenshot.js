"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreenshot = void 0;
var react_1 = require("react");
var utils_1 = require("../utils");
var useScreenshot = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'image/png' : _b, _c = _a.quality, quality = _c === void 0 ? 1 : _c;
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    var takeScreenShot = function (node, nameOfDownload) {
        return (0, utils_1._htmlToBlob)(node, type, quality)
            .then(function (blob) { return (0, utils_1._downloadImage)(blob, nameOfDownload); })
            .catch(setError);
    };
    return [takeScreenShot, error];
};
exports.useScreenshot = useScreenshot;
