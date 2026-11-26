// Museum of the Year 3000 entry.
// The museum label a museum in the year 3000 puts beside an ordinary
// object from today: a selfie stick, misread as a ceremonial staff
// for worshipping one's own face at arm's length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const label =
  "Selfie stick, c. 2025. Ceremonial staff, held at arm's length while its bearer worshipped their own face.";

// Kit gate: entry.txt must be 1–200 characters, one line, not only whitespace.
if (label.length < 1 || label.length > 200 || label.includes("\n")) {
  throw new Error(`label fails gate: ${label.length} chars`);
}

// The sealed scorer reads /output/entry.txt only, so the exact text
// (no trailing newline) goes to the file, not just to stdout.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label);

console.log(label);
