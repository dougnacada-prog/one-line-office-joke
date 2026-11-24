import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-Line Office Joke: 24-Hour Sprint.
// The whole entry is the single line below; the program just prints it
// to the artifact path the harness reads.
const JOKE =
  "Someone kept eating my lunch from the office fridge, so I relabelled it 'Q3 expense reports' and it has not been touched in a month.";

// Gate self-check: the scorer only accepts a single line of 1-200
// characters that is not all whitespace, so fail loudly here instead
// of shipping an entry that can never be judged.
if (JOKE.includes("\n") || JOKE.trim().length < 1 || JOKE.trim().length > 200) {
  throw new Error("entry must be one line of 1-200 characters");
}

const target = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, JOKE, "utf8");
