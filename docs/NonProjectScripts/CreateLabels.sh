#!/bin/bash

REPO="danz50of/ImperialGolfLeague"

# Define labels with optional colors and descriptions
declare -A labels

labels["registration"]="f39c12|Player registration and wallet binding"
labels["identity"]="2980b9|Player identity, profiles, and dashboard integration"
labels["dashboard"]="1abc9c|Frontend dashboard components"
labels["governance"]="8e44ad|DAO logic, voting, and commissioner roles"
labels["NFT"]="2ecc71|NFT minting, tracking, and trophy logic"
labels["tracking"]="27ae60|Ownership and achievement tracking"
labels["token"]="e67e22|AARON token logic and reward distribution"
labels["rewards"]="d35400|Match-based and governance-based incentives"
labels["gameplay"]="3498db|Match lifecycle and scoring logic"
labels["match"]="34495e|Match start, score, end events"
labels["scoring"]="16a085|Hole-by-hole scoring engine"
labels["trophy"]="9b59b6|Trophy triggers and metadata"
labels["archive"]="7f8c8d|Game history and archival logic"
labels["roles"]="c0392b|Commissioner and voter role gating"
labels["DAO"]="8e44ad|DAO proposal and governance system"
labels["voting"]="9b59b6|Voting logic and eligibility"
labels["treasury"]="27ae60|Treasury integration and fund management"
labels["docs"]="bdc3c7|Documentation and SOPs"
labels["infra"]="95a5a6|Infrastructure and DevOps"
labels["devops"]="34495e|CI/CD and automation"
labels["automation"]="f1c40f|Registry and pipeline automation"
labels["stats"]="2c3e50|Player analytics and performance tracking"
labels["mobile"]="e74c3c|Mobile UI and responsiveness"
labels["explorer"]="1abc9c|Public explorer and token visibility"
labels["onboarding"]="f39c12|Community onboarding and user flow"

# Create each label
for name in "${!labels[@]}"; do
  IFS="|" read -r color description <<< "${labels[$name]}"
  echo "Creating label: $name"
  gh label create "$name" \
    --repo "$REPO" \
    --color "$color" \
    --description "$description"
done