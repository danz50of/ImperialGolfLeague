#!/bin/bash

REPO="danz50of/ImperialGolfLeague"

# Milestone titles
milestones=(
  "Phase 2: Player Registration & Identity Layer"
  "Phase 3: Gameplay Logic & Event System"
  "Phase 4: Governance & DAO Integration"
  "Phase 5: Infrastructure & DevOps"
  "Phase 6: Expansion & Legacy"
)

# Raw issue blocks separated by "===" (each block corresponds to a milestone)
issue_blocks=$(cat <<EOF
Register players with wallet binding|registration,identity
Design player profile schema|dashboard,identity
Wire dashboard to profile data|frontend,identity
Assign governance roles to players|governance,identity
Track NFT ownership per player|NFT,tracking
Mint AARON tokens for match participation|token,rewards
Generate HTML profile pages|frontend,identity
===
Implement match lifecycle (start, score, end)|gameplay,match
Build scoring engine (hole-by-hole)|gameplay,scoring
Trigger trophies based on match events|NFT,trophy
Archive game history|gameplay,archive
Build frontend dashboard|frontend,gameplay
===
Add commissioner role gating|governance,roles
Implement DAO proposal system|governance,DAO
Build voting logic (ERC20/ERC721)|governance,voting
Integrate treasury logic|governance,treasury
Draft governance documentation|docs,governance
===
Setup CI/CD pipeline|infra,devops
Automate markdown registry|infra,automation
Draft internal wiki and SOPs|docs,infra
===
Support multi-season trophies|expansion,NFT
Add player stats and analytics|expansion,stats
Build mobile-friendly frontend|frontend,mobile
Integrate public explorer|frontend,explorer
Design community onboarding flow|expansion,onboarding
EOF
)

# Split blocks into a temporary array
IFS=$'\n' read -d '' -r -a blocks <<< "$(echo "$issue_blocks" | awk 'BEGIN{RS="==="; ORS="\n"} {print $0}')"

# Loop through each milestone and its corresponding block
for i in "${!milestones[@]}"; do
  milestone="${milestones[$i]}"
  echo "Creating issues for milestone: $milestone"
  while IFS= read -r line; do
    # Skip empty lines
    [[ -z "$line" ]] && continue
    IFS="|" read -r title labels <<< "$line"
    gh issue create --repo "$REPO" \
      --title "$title" \
      --body "Auto-generated issue for $milestone." \
      --label "$labels" \
      --milestone "$milestone"
  done <<< "${blocks[$i]}"
done