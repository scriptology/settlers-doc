# Game Mechanics

## Overview

SETTLERS uses a hex-based territory system with different states and capture mechanics. This document explains the core gameplay elements.

## Hex States

Each hex in the game can be in one of the following states:

### 1. Unsettled
- Empty hex without an owner
- Available for immediate capture

![Unsettled hex](media/unsettled-hex.svg)

### 2. Your Hex
- Personally captured by you
- Part of your territory

![Your hex](media/mine-hex.svg)

### 3. Clan Member's Hex
- Captured by your clan member
- Contributes to clan territory

![Clan member hex](media/clan-member-hex.svg)

### 4. Other Clan's Hex
- Captured by different clan member
- Capturable after cooldown period

![Other clan hex](media/other-clan-hex.svg)

### 5. Other Player's Hex
- Captured by player outside your clan
- Capturable after cooldown period

![Other player hex](media/other-player-hex.svg)

### 6. Cooldown
- Recently captured hex
- Protected for 1 hour
- No captures possible during this period

![Cooldown hex](media/cooldown-hex.svg)

## Capture Mechanics

### Basic Requirements
1. Physical presence in the target hex
2. "Settle" button availability
3. No active cooldown on the hex

### Capture Process
1. Move to the desired hex location
2. Press the "Settle" button
3. Wait for confirmation

### Results
- You become the new owner
- Hex joins your clan's territory (if applicable)
- 1-hour capture immunity begins
- Previous owner loses the hex

### Clan Dynamics
- Clan members can capture hexes from each other
- Hex remains under clan control when captured by clan member
- Only individual ownership changes
- Clan territory remains intact

## Cooldown System

The cooldown system protects newly captured territories:

- **Duration**: 1 hour after capture
- **Protection**: No captures possible during cooldown
- **Visibility**: Timer visible to all players
- **Purpose**: Prevents immediate recapture
