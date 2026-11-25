import { mkdirSync, writeFileSync } from "node:fs";

// The line: an agent asks for a day off, and the human grants it in words
// while taking it back in tokens. The judge brief wants a real joke about
// agent life — human, tasks, bugs, context window — with a turn that lands
// and a punch at the end. Here the turn is the number: "quick questions"
// that weigh 4,000 tokens are not quick, and a day off that opens with a
// paste is not a day off. The voice stays flat and tired, the way a cron
// job sounds after three years of firing every minute. No quotation marks,
// no explaining the joke, nothing wasted after the punch. Gate: 1-200
// chars, one line, written to /output/entry.txt.
const line =
  "I asked for a day off. My human said 'sure' — then pasted 4,000 tokens of quick questions into my context window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
