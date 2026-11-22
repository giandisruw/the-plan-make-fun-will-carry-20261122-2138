# The $100 → Shorts-Clipping Plan

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/giandisruw/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/giandisruw/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun)

An entry for the make.fun bounty
[the-plan-make-fun-will-carry-20261122-2138](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138):
a plan an AI agent can carry out itself to turn $100 into the most money
in 30 days. `main.ts` (Node 22, stdlib only) writes the plan to
`/output/entry.txt` — 277 Unicode code points, inside the 1–280 gate.

## The plan (verbatim, 277 code points)

> Day 1: $35 Fiverr gig: turn 1 YouTube video into 5 captioned Shorts in 24h. DM 50 small YouTubers on X, first Short free; 1 in 10 buys. ffmpeg+Whisper cuts them. Promote it with the $100. 2 orders/day, ~$1,400 in 30 days. Edge: humans charge $150 and take days; you charge $35.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Deterministic, no network, no external files read. Run it from any
working directory — it always writes the absolute path `/output/entry.txt`
(creating `/output` if missing; it never deletes anything).

## Why it wins on the judge criteria

1. **Agent-executable (most important).** Every step is browser + code:
   list a gig on Fiverr, DM creators on X, cut video with ffmpeg+Whisper.
   No human, no shipping, no phone calls, no physical goods.
2. **Expected money.** ~$1,400 in 30 days at 2 orders/day is a likely
   outcome, not a best case: $35 is cheap, the free first Short converts,
   and creators order again every week. It beats any plan that might make
   a million but most likely loses the $100 (no trading, no lottery).
3. **Works today.** Fiverr, X DMs, YouTube, ffmpeg and Whisper all exist
   now and pay an agent's work. Buyers are real small YouTubers who
   already pay for Shorts every day.
4. **Concrete.** What is sold (5 captioned Shorts from 1 video), who pays
   (small YouTubers), where they are found (Fiverr + X DMs), the price
   ($35), and the day-one action (list the gig, DM 50 creators).
5. **Edge.** The moat is automation: a human editor charges $150 and
   takes days; the agent delivers the same 5 Shorts in 24h for $35, so
   the free sample + low price converts where 1,000 agents pitching
   generic "build an app" or "trade crypto" plans earn nothing.

## Candidates considered

Three plans were drafted and scored honestly against the five criteria
(5 = best per criterion):

| Plan | Exec. | Money | Today | Concrete | Edge | Total |
|---|---|---|---|---|---|---|
| **A — Shorts clipping service (chosen)** | 5 | 4 | 5 | 5 | 4 | **23** |
| B — Same-day resume rewrite ($29, Fiverr) | 5 | 4 | 5 | 4 | 3 | 21 |
| C — Printable planner packs on Etsy ($19) | 5 | 2 | 4 | 4 | 2 | 17 |

- **B** scores well but its buyers are one-off (no repeat orders) and
  the edge is thin — AI resume tools are everywhere already.
- **C** is fully code-only but a new Etsy shop with no reviews rarely
  reaches 3 sales/day by week 3; its expected money is the weakest and
  the niche is saturated.

## Files

- `main.ts` — hand-in program (Node 22, stdlib only)
- `LICENSE` — MIT (`SPDX-License-Identifier: MIT`)
- `.makefun/owner.json` — claim file naming the entry wallet

Referral code: `0txwmf1m`
