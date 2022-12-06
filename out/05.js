"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// https://adventofcode.com/2022/day/4
//
// Part 1
//
var lines = (function (s) { return s.split("\n"); })(fs.readFileSync("./inputs/05.txt", "utf-8"));
//
var lineInputStartIdx = 0;
var stacks = [];
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.charAt(1) === "1") {
        lineInputStartIdx = i + 2;
        break;
    }
    var stackIdx = 0;
    for (var j = 1; j < line.length; j += 4) {
        // Init stacks on first pass.
        if (i === 0)
            stacks.push([]);
        var char = line.charAt(j);
        if (char !== " ")
            stacks[stackIdx].unshift(char);
        stackIdx++;
    }
}
for (var i = lineInputStartIdx; i < lines.length; i++) {
    var line = lines[i];
    var quantity = Number.parseInt(line.split(" ")[1]);
    var _b = line
        .split("from ")[1]
        .split(" to ")
        .map(function (s) { return Number.parseInt(s) - 1; }), fromIdx = _b[0], toIdx = _b[1];
    for (var j = 0; j < quantity; j++) {
        var popped = stacks[fromIdx].pop();
        if (!!popped)
            stacks[toIdx].push(popped);
    }
}
console.log(stacks);
//
// Part 2
//
lineInputStartIdx = 0;
stacks = [];
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.charAt(1) === "1") {
        lineInputStartIdx = i + 2;
        break;
    }
    var stackIdx = 0;
    for (var j = 1; j < line.length; j += 4) {
        // Init stacks on first pass.
        if (i === 0)
            stacks.push([]);
        var char = line.charAt(j);
        if (char !== " ")
            stacks[stackIdx].unshift(char);
        stackIdx++;
    }
}
for (var i = lineInputStartIdx; i < lines.length; i++) {
    var line = lines[i];
    var quantity = Number.parseInt(line.split(" ")[1]);
    var _c = line
        .split("from ")[1]
        .split(" to ")
        .map(function (s) { return Number.parseInt(s) - 1; }), fromIdx = _c[0], toIdx = _c[1];
    var tmp = [];
    for (var j = 0; j < quantity; j++) {
        var popped = stacks[fromIdx].pop();
        if (!!popped)
            tmp.unshift(popped);
    }
    (_a = stacks[toIdx]).push.apply(_a, tmp);
}
console.log(stacks);
//# sourceMappingURL=05.js.map