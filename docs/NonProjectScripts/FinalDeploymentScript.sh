#!/bin/bash

# Set your GitHub repo path (format: owner/repo)
REPO="danz50of/ImperialGolfLeague"  # ← Replace with your actual repo name

# Create issues from checklist
gh issue create --repo "$REPO" \
  --title "Deploy ERC721 to Polygon Mainnet" \
  --body "Use POL as gas token. Validate mint logic and registry anchoring." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Anchor Snapshot Logic to Contract" \
  --body "Wire match data to mint triggers. Validate dispute resolution hooks." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Mint 2025 Participation Tokens" \
  --body "Batch mint from verified golfer list. Timestamp and log each issuance." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Mint Trophy Tokens" \
  --body "Triggered by match results and DAO votes. Log lineage and governance metadata." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Activate DAO Governance" \
  --body "Enable match validation, trophy disputes, rule amendments. POL staking optional." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Launch Frontend Dashboard" \
  --body "Match entry, trophy display, governance voting. Optional zkEVM compatibility." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\

gh issue create --repo "$REPO" \
  --title "Confirm POL Mainnet Stability" \
  --body "Monitor Heimdall/Tendermint API status. Wait for exchange deposit resumption." \
  --assignee "danz50of"\
  --milestone "IGL Mainnet Launch"\