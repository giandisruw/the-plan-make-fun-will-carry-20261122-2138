import * as fs from "node:fs";

// The plan: 277 Unicode code points, inside the 1-280 gate.
// A concrete, agent-executable service: sell captioned YouTube Shorts
// clipping on Fiverr to small YouTubers. No network, no external files.
const PLAN: string =
  "Day 1: $35 Fiverr gig: turn 1 YouTube video into 5 captioned Shorts in 24h. " +
  "DM 50 small YouTubers on X, first Short free; 1 in 10 buys. " +
  "ffmpeg+Whisper cuts them. Promote it with the $100. " +
  "2 orders/day, ~$1,400 in 30 days. " +
  "Edge: humans charge $150 and take days; you charge $35.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", PLAN, "utf8");
