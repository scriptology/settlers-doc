# Territory System

The game world is divided into three map layers:

## Hex Layer
- Basic game unit: <span style="color: #2962FF">0.015</span> km² per hex
- Total <span style="color: #2962FF">34 billion</span> hexes worldwide
- Individual capture and control
- Direct player interaction layer


![Hex example](media/mine-hex.svg)

## Clan Territory Layer
- <span style="color: #2962FF">0.737</span> km² per hex (49 regular hexes)
- Shows clan dominance in regions

![Hex example](media/hex-clan-level.svg)

### Control Calculation
- Clan needs >50% of captured regular hexes for control
- Example: 25/49 hexes = 51% = clan control
- Updates dynamically

## Global Layer
- Worldwide territory overview
- Total captured territories
- Global clan presence


