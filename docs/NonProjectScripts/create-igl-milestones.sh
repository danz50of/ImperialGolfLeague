#!/bin/bash

REPO="danz50of/ImperialGolfLeague"

# Titles and descriptions as parallel arrays
titles=(
  "Phase 2: Player Registration & Identity Layer"
  "Phase 3: Gameplay Logic & Event System"
  "Phase 4: Governance & DAO Integration"
  "Phase 5: Infrastructure & DevOps"
  "Phase 6: Expansion & Legacy"
)

descriptions=(
  "Wallet binding, profile schema, AARON token rewards"
  "Match lifecycle, scoring engine, frontend prototype"
  "Commissioner gating, DAO proposals, voting logic"
  "CI/CD, markdown automation, internal SOPs"
  "Multi-season support, stats, mobile UI, explorer"
)

# Loop through arrays
for i in "${!titles[@]}"; do
  title="${titles[$i]}"
  description="${descriptions[$i]}"
  echo "Creating milestone: $title"
  gh api repos/$REPO/milestones \
    --method POST \
    --field title="$title" \
    --field description="$description"
done