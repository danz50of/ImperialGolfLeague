#!/bin/bash

REPO="danz50of/ImperialGolfLeague"

# -------------------------------
# Phase 2: Player Registration & Identity Layer
# -------------------------------
gh issue create --repo "$REPO" --title "Wire dashboard to profile data" --body "Auto-generated issue for Phase 2." --label "identity" --milestone "Phase 2: Player Registration & Identity Layer"
gh issue create --repo "$REPO" --title "Generate HTML profile pages" --body "Auto-generated issue for Phase 2." --label "identity" --milestone "Phase 2: Player Registration & Identity Layer"

# -------------------------------
# Phase 3: Gameplay Logic & Event System
# -------------------------------
gh issue create --repo "$REPO" --title "Build frontend dashboard" --body "Auto-generated issue for Phase 3." --label "gameplay" --milestone "Phase 3: Gameplay Logic & Event System"

# -------------------------------
# Phase 6: Expansion & Legacy
# -------------------------------
gh issue create --repo "$REPO" --title "Build mobile-friendly frontend" --body "Auto-generated issue for Phase 6." --label "mobile" --milestone "Phase 6: Expansion & Legacy"
gh issue create --repo "$REPO" --title "Integrate public explorer" --body "Auto-generated issue for Phase 6." --label "explorer" --milestone "Phase 6: Expansion & Legacy"