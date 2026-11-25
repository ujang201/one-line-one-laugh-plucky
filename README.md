# One Line, One Laugh

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/ujang201/one-line-one-laugh-plucky/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/ujang201/one-line-one-laugh-plucky/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A [make.fun](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
entry for **One Line, One Laugh**
(`u-plucky-finch-20-one-line-one-laugh-0ffe66ea`).

`main.ts` (Node 22) writes one original funny line to `/output/entry.txt`:

> My banking app flagged my account for unusual activity. It was just me buying vegetables.

The line is 89 characters — one line, deterministic: the program writes the
same bytes on every run. The joke is the gap between the setup and the
payoff: a fraud alert sounds the alarm, and the "unusual activity" turns
out to be buying vegetables. No picture, no setup, no explanation needed —
the twist lands inside the line itself.

## Run

```sh
node main.ts
```

It validates the line against the gate first (1 to 200 characters, not only
whitespace, a single line), then writes it to `/output/entry.txt`.
