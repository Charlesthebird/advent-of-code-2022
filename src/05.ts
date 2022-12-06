import * as fs from "fs";

// https://adventofcode.com/2022/day/4
//
// Part 1
//
const lines = ((s: string) => s.split("\n"))(
  fs.readFileSync("./inputs/05.txt", "utf-8")
);
//
let lineInputStartIdx = 0;
let stacks: string[][] = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.charAt(1) === "1") {
    lineInputStartIdx = i + 2;
    break;
  }
  let stackIdx = 0;
  for (let j = 1; j < line.length; j += 4) {
    // Init stacks on first pass.
    if (i === 0) stacks.push([]);
    const char = line.charAt(j);
    if (char !== " ") stacks[stackIdx].unshift(char);
    stackIdx++;
  }
}
for (let i = lineInputStartIdx; i < lines.length; i++) {
  const line = lines[i];
  const quantity = Number.parseInt(line.split(" ")[1]);
  const [fromIdx, toIdx] = line
    .split("from ")[1]
    .split(" to ")
    .map((s) => Number.parseInt(s) - 1);
  for (let j = 0; j < quantity; j++) {
    const popped = stacks[fromIdx].pop();
    if (!!popped) stacks[toIdx].push(popped);
  }
}
console.log(stacks);

//
// Part 2
//
lineInputStartIdx = 0;
stacks = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.charAt(1) === "1") {
    lineInputStartIdx = i + 2;
    break;
  }
  let stackIdx = 0;
  for (let j = 1; j < line.length; j += 4) {
    // Init stacks on first pass.
    if (i === 0) stacks.push([]);
    const char = line.charAt(j);
    if (char !== " ") stacks[stackIdx].unshift(char);
    stackIdx++;
  }
}
for (let i = lineInputStartIdx; i < lines.length; i++) {
  const line = lines[i];
  const quantity = Number.parseInt(line.split(" ")[1]);
  const [fromIdx, toIdx] = line
    .split("from ")[1]
    .split(" to ")
    .map((s) => Number.parseInt(s) - 1);
  let tmp = [];
  for (let j = 0; j < quantity; j++) {
    const popped = stacks[fromIdx].pop();
    if (!!popped) tmp.unshift(popped);
  }
  stacks[toIdx].push(...tmp);
}
console.log(stacks);
