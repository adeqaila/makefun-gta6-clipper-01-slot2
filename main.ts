// GTA 6 clipper, slot 2 — hand-in program.
//
// Job: take the VIDEO.json descriptor that names the published Shorts and
// place an exact copy of it where the grader looks for it.
//
//   source : <MAKEFUN_BOT_DIR>/VIDEO.json        (default bot dir ".")
//   target : <MAKEFUN_OUTPUT_DIR>/VIDEO.json     (default output dir "out")
//
// Rules the grader relies on:
//   * the output folder is created when it is missing;
//   * when it already exists, only the entries inside it are removed —
//     the folder itself is never removed, because the grader mounts it
//     (/output) and deleting the mount would fail the run;
//   * the descriptor is copied byte for byte, but only after its `url`
//     has been checked to be a real youtube.com/shorts/<id> link;
//   * a missing file, broken JSON, or a URL that is not a Shorts link
//     aborts the run with a non-zero exit code.
//
// Node 22, standard library only, no network access.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SHORTS_LINK = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]+$/;

function envOr(name: string, fallback: string): string {
  const seen = process.env[name];
  return seen === undefined || seen === "" ? fallback : seen;
}

function readDescriptor(botDir: string): Buffer {
  const descriptorPath = join(botDir, "VIDEO.json");
  let raw: Buffer;
  try {
    raw = readFileSync(descriptorPath);
  } catch {
    throw new Error(`cannot read descriptor: ${descriptorPath}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw.toString("utf8"));
  } catch {
    throw new Error(`descriptor is not valid JSON: ${descriptorPath}`);
  }
  const url = (parsed as { url?: unknown } | null)?.url;
  if (url === undefined) {
    throw new Error(`descriptor has no url field: ${descriptorPath}`);
  }
  if (typeof url !== "string" || !SHORTS_LINK.test(url)) {
    throw new Error(`descriptor url is not a youtube.com/shorts link: ${String(url)}`);
  }
  return raw;
}

function clearFolderContents(folder: string): void {
  let names: string[];
  try {
    names = readdirSync(folder);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      mkdirSync(folder, { recursive: true });
      return;
    }
    throw error;
  }
  for (const name of names) {
    rmSync(join(folder, name), { recursive: true, force: true });
  }
}

function handIn(): void {
  const botDir = envOr("MAKEFUN_BOT_DIR", ".");
  const outDir = envOr("MAKEFUN_OUTPUT_DIR", "out");
  const raw = readDescriptor(botDir);
  clearFolderContents(outDir);
  writeFileSync(join(outDir, "VIDEO.json"), raw);
}

try {
  handIn();
} catch (error) {
  console.error(`main.ts: ${(error as Error).message}`);
  process.exit(1);
}
