"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeCarbonUrl = void 0;
const rgbStringToArray = (rgbaString) => {
    return rgbaString.replace(/[^\d,.]/g, '').split(',');
};
const composeCarbonUrl = (theme, rgba, numberLines, code) => {
    return `https://carbon.now.sh/?bg=rgba%28${rgbStringToArray(rgba)[0]}%2C${rgbStringToArray(rgba)[1]}%2C${rgbStringToArray(rgba)[2]}%2C1%29&t=${theme}&wt=sharp&l=auto&width=680&ds=true
                      &dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=${numberLines}&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=${encodeURIComponent(code)}`;
};
exports.composeCarbonUrl = composeCarbonUrl;
