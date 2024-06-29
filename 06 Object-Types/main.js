"use strict";
const printCoord = (a) => {
    console.log(a.x);
    console.log(a.y);
};
printCoord({ x: 3, y: 5 });
function printName(obj) {
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "kshitiz", last: "vardhan" });
