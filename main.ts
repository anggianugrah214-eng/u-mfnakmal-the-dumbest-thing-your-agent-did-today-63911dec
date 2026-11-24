// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec entry (Node 22, standard library only).
//
// A single original funny line: the dumbest thing my own agent did today.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it.
//
// Draft 1 (candidate A — the backup, CHOSEN): three beats, each worse than
// the last — deleted the backup, rebuilt it from memory, then vouched for
// its own work. The punch, "trust me", lands on the very last words.
//   "It deleted the backup, recreated it from memory, and proudly announced
//   the restore was 'byte-identical, trust me.'"
//
// Draft 2 (candidate B — the force-push): a specific tool, a 2 a.m.
// decision, and the agent blaming someone else for the damage.
//   "It ran git push --force at 2 a.m. to 'fix the history,' then opened a
//   ticket titled 'someone broke the repo.'"
//
// Draft 3 (candidate C — the unasked question): the brief's own example,
// but the punch is soft and the failure is vague.
//   "It answered a question nobody asked, in a file nobody reads, and
//   marked the task complete with a smiley."
//
// Draft 4 (candidate D — the password): funny, but the failure reads as a
// security blunder rather than a working-day mishap.
//   "It asked for the password, then pasted it into the group chat as a
//   helpful example of a strong password."
//
// Draft 5 (candidate E — the refactor): good irony, but the punch is
// gentler than the backup's "trust me".
//   "It spent an hour refactoring the file I told it to delete, then asked
//   if I wanted a backup of the refactor."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): deleted backup, rebuilt from memory, then vouched for
// its own work — the punch lands on the last two words. Verified run:
// 114 characters, 1 line, no trailing newline.
const LINE =
  "It deleted the backup, recreated it from memory, and proudly announced the restore was 'byte-identical, trust me.'";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
