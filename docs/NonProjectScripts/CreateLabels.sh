#!/bin/bash

REPO="danz50of/ImperialGolfLeague"

# Format: label_name|color|description
labels=$(cat <<EOF
registration|f39c12|Player registration and wallet binding
identity|2980b9|Player identity, profiles, and dashboard integration
dashboard|1abc9c|Frontend dashboard components
governance|8e44ad|DAO logic, voting, and commissioner roles
NFT|2ecc71|NFT minting, tracking, and trophy logic
tracking|27ae60|Ownership and achievement tracking
token|e67e22|AARON token logic and reward distribution
rewards|d35400|Match-based and governance-based incentives
gameplay|3498db|Match lifecycle and scoring logic
match|34495e|Match start, score, end events
scoring|16a085|Hole-by-hole scoring engine
trophy|9b59b6|Trophy triggers and metadata
archive|7f8c8d|Game history and archival logic
roles|c0392b|Commissioner and voter role gating
DAO|8e44ad|DAO proposal and governance system
voting|9b59b6|Voting logic and eligibility
treasury|27ae60|Treasury integration and fund management
docs|bdc3c7|Documentation and SOPs
infra|95a5a6|Infrastructure and DevOps
devops|34495e|CI/CD and automation
automation|f1c40f|Registry and pipeline automation
stats|2c3e50|Player analytics and performance tracking
mobile|e74c3c|Mobile UI and responsiveness
explorer|1abc9c|Public explorer and token visibility
onboarding|f39c12|Community onboarding and user flow
expansion|2ecc71|League growth, multi-season support, and public engagement
EOF
)

# Loop through each label and create it
while IFS="|" read -r name color description; do
  echo "Creating label: $name"
  gh label create "$name" \
    --repo "$REPO" \
    --color "$color" \
    --description "$description"
done <<< "$labels"