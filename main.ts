// One Line, One Laugh — make.fun entry (u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
//
// A deterministic writer: it composes exactly one funny line from two
// halves — an alarming setup and a disappointingly wholesome payoff —
// validates it against the gate (1..200 characters, not only whitespace,
// a single line), and writes it to /output/entry.txt. No input is read,
// no randomness, no network: every run produces the same bytes.
//
// SPDX-License-Identifier: MIT

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The gate counts characters, so the line is built from counted parts and
// checked before anything is written.
const SETUP = "My banking app flagged my account for unusual activity.";
const PAYOFF = "It was just me buying vegetables.";

const MAX_CHARS = 200;

function composeLine(): string {
  // One space joins the alarm and the letdown; the joke is the gap between
  // "flagged for unusual activity" and the most boring purchase possible.
  return `${SETUP} ${PAYOFF}`;
}

function validateLine(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`line must be 1..${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function outputPath(): string {
  // The grader mounts its writable directory at /output; OUTPUT_DIR only
  // exists so the same program can be exercised against a scratch dir.
  const dir = process.env.OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const line = composeLine();
  validateLine(line);
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, line, "utf8");
  // Read the file back and confirm the written bytes are exactly the line:
  // a silent short write or a stray newline would fail the gate.
  const written = readFileSync(path, "utf8");
  if (written !== line) {
    throw new Error(`read-back mismatch: wrote ${line.length} chars, file holds ${written.length}`);
  }
  console.log(`${line.length} chars -> ${path}`);
  console.log(line);
}

main();
