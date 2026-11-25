import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one loading-screen tip, written for a stressed developer and
// the AI coding agent building beside them, in a single fixed line.
const TIP =
  "Tip: while the build thinks, breathe — you are both stuck on the same problem, and only one of you is allowed to panic. Spoiler: it is not the build.";

// The gate: 1 to 200 characters, and not only white space. Refuse to emit
// anything outside that range.
const MAX_CHARS = 200;

if (TIP.length < 1 || TIP.length > MAX_CHARS || TIP.trim().length === 0) {
  throw new Error(
    `Tip is ${TIP.length} characters, outside the 1-${MAX_CHARS} character gate.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TIP);
