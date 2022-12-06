import * as fs from "fs";

// https://adventofcode.com/2022/day/3
//
// Part 1
//
console.log(
	((s: string) =>
		s.split("\n").reduce(
			(p, c) =>
				p +
				((c1: string, c2: string) => {
					const c1Items = c1.split("");
					const c2Items = c2.split("");
					const sharedItems = Array.from(
						new Set<string>(
							...c1Items.filter((it) => c2Items.includes(it)),
							...c2Items.filter((it) => c1Items.includes(it))
						).values()
					);
					const sharedItemCodes = sharedItems.map((c) => c.charCodeAt(0));
					const res = sharedItemCodes.reduce((p, c) => p + (c >= 97 ? c - 96 : c - 38), 0);
					return res;
				})(c.substring(0, c.length / 2), c.substring(c.length / 2, c.length)),
			0
		))(fs.readFileSync("./inputs/03.txt", "utf-8"))
);

// Part 2
//
const lines = ((s: string) => s.split("\n"))(fs.readFileSync("./inputs/03.txt", "utf-8"));
let result = 0;
const groups: string[][] = [];
for (let i = 0; i < lines.length; i++) {
	const groupIdx = Math.floor(i / 3);
	if (groupIdx >= groups.length) groups.push([]);
	groups[groupIdx].push(lines[i]);
}
for (let group of groups) {
	let groupId: string;
	const firstRucksack = group[0];
	for (let candidate of firstRucksack) {
		let isValidCandidate = true;
		for (let i = 1; i < group.length; i++) {
			if (group[i].indexOf(candidate) == -1) {
				isValidCandidate = false;
				break;
			}
		}
		if (isValidCandidate) {
			groupId = candidate;
			break;
		}
	}
	const c = groupId.charCodeAt(0);
	result += c >= 97 ? c - 96 : c - 38;
}
console.log(result);
