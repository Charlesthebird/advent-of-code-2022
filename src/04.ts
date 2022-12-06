import * as fs from "fs";

// https://adventofcode.com/2022/day/4
//
// Part 1
//
const lines = ((s: string) => s.split("\n"))(
  fs.readFileSync("./inputs/04.txt", "utf-8")
);
let result = 0;
//
// Checks if r1 fully contains r2.
function rangeFullyContains(r1: number[], r2: number[]) {
  return r2[1] <= r1[1] && r2[0] >= r1[0];
}
for (let line of lines) {
  const ranges = line.split(",");
  let range1 = ranges[0].split("-").map((s) => Number.parseInt(s));
  let range2 = ranges[1].split("-").map((s) => Number.parseInt(s));
  // Check if range1 contains range2 or range2 contains range1
  if (rangeFullyContains(range1, range2) || rangeFullyContains(range2, range1))
    result++;
}
console.log(result);

//
// Part 2
//
result = 0;
//
// Checks if r1 contains any part of r2.
function rangeContainsAtAll(r1: number[], r2: number[]) {
  return (
    (r2[1] <= r1[1] && r2[1] >= r1[0]) || (r2[0] <= r1[1] && r2[0] >= r1[0])
  );
}
for (let line of lines) {
  const ranges = line.split(",");
  let range1 = ranges[0].split("-").map((s) => Number.parseInt(s));
  let range2 = ranges[1].split("-").map((s) => Number.parseInt(s));
  // Check if range1 contains range2 or range2 contains range1
  if (rangeContainsAtAll(range1, range2) || rangeContainsAtAll(range2, range1))
    result++;
}
console.log(result);
