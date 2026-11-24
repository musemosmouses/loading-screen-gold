// Loading Screen Gold — one original tip for stressed developers
// and the AI coding agents working beside them. The joke lands on
// the reframe: the agent stares at a loading screen too — and that
// screen is your code. One line, one punchline, 88 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tip: your AI agent is also staring at a loading screen right now. It's called your code.";

// One line, one tip: the kit gate only accepts 1 to 200 characters,
// counted as code points (spread, not .length, so astral characters
// count once), so the check below mirrors it exactly.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const MAX_CHARS = 200;
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} non-whitespace characters, got ${charCount}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
