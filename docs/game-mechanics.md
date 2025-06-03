# Game Mechanics

## Overview

SETTLERS uses a hex-based territory system with different states and capture mechanics. This document explains the core gameplay elements.

> [!IMPORTANT]
> To play SETTLERS, you must allow location access and be physically present at the hex you want to capture. Location spoofing is not allowed and may result in account restrictions.

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

> [!NOTE]
> Each hex can only have one owner at a time. When you capture a hex, the previous owner immediately loses control of it.

### Basic Requirements
1. Physical presence in the target hex
2. "Settle" button availability
3. No active cooldown on the hex

### Capture Process
1. Move to the desired hex location
2. Press the "Settle" button
3. Wait for confirmation

> [!TIP]
> To maximize your territory, try to capture hexes that connect to your existing territory. Connected hexes are more valuable for clan control calculations.

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

> [!WARNING]
> Capturing hexes from your own clan members might be seen as hostile behavior. Make sure to coordinate with your clan before capturing territory from clanmates.

## Cooldown System

The cooldown system protects newly captured territories:

> [!IMPORTANT]
> Every hex enters a 1-hour protection period immediately after capture. During this time, NO ONE can capture the hex - not even clan members.

- **Duration**: 1 hour after capture
- **Protection**: No captures possible during cooldown
- **Visibility**: Timer visible to all players
- **Purpose**: Prevents immediate recapture
