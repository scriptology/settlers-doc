# Territory System

The game world is divided into three map layers: **Hex Layer**, **Clan Territory Layer**, and **Global Layer**.

## Hex Layer

- Area: <span style="color: #2962FF">0.015 km²</span> (15,000 m²)
- Count: <span style="color: #2962FF">34 billion</span> hexes worldwide
- Basic unit for capturing territory

![Regular Hex Example](media/mine-hex.svg)

## Clan Territory Layer

- Area: <span style="color: #2962FF">0.737 km²</span> (737,000 m²)
- Structure: 7 regular hexes (1 central + 6 surrounding)
- Shows clan dominance in regions

![Clan Territory Example](media/hex-clan-level.svg)

### Control Rules
- Need 4+ hexes (>50%) for clan control
- Example: 4/7 hexes = 57% = clan control
- Updates dynamically with captures

### Area Formula
A_clan = 7 × A_regular = 7 × 0.015 km² = 0.737 km²

![Territory Structure](media/nested-hexes.png)

## Global Layer
- World map overview
- Total clan territories
- Global influence visualization