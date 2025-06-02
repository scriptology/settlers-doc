# Territory System

The game world is a dynamic map of Earth divided into hexagonal grids across three layers: **Hex Layer**, **Clan Territory Layer**, and **Global Layer**. Hexagons are the core building blocks, designed to evenly cover the planet's surface and enable seamless gameplay interactions.

## How Hexagons Are Formed

Hexagons are six-sided shapes that tile the Earth's surface, creating a grid that balances accuracy and simplicity. They are formed by dividing the planet into a network of interlocking hexagons, ensuring uniform coverage with minimal distortion, even on a curved surface. Each hexagon represents a specific area, and larger hexagons (clan territories) are composed of smaller ones (regular hexes). This hierarchical structure allows the game to scale from local actions to global strategies.

- **Why Hexagons?** Unlike squares, hexagons have six equal neighbors, making movement and control calculations consistent and intuitive. They also reduce overlap and gaps on a spherical surface.
- **Formation Process**: The game starts with large hexagons, which are subdivided into smaller ones. A clan territory hexagon contains exactly 7 regular hexes, arranged in a compact, flower-like pattern (one central hex surrounded by six others).

## Hex Layer

- **Area**: Each regular hex covers <span style="color: #2962FF">0.015 km²</span> (15,000 m²).
- **Total Count**: Approximately <span style="color: #2962FF">34 billion</span> regular hexes worldwide.
- **Purpose**: The basic unit for player actions, such as capturing or defending territory.
- **Gameplay**: Players interact directly with regular hexes, claiming them individually to build influence.

![Regular Hex Example](media/mine-hex.svg)

### Area Calculation
The area of a regular hex is derived from dividing larger hexagons. For simplicity, the game uses an average area of 0.015 km², calculated to reflect Earth's curvature.

## Clan Territory Layer

- **Area**: Each clan territory hex spans <span style="color: #2962FF">0.737 km²</span> (737,000 m²).
- **Structure**: One clan territory hex contains <span style="color: #2962FF">7 regular hexes</span> (one central hex surrounded by six adjacent hexes).
- **Purpose**: Reflects clan dominance over larger regions.

![Clan Territory Example](media/hex-clan-level.svg)

### Control Calculation
- A clan gains control of a territory hex by capturing at least 50% of its regular hexes (i.e., 4 out of 7 hexes).
- **Example**: Capturing 4/7 hexes = 57% = clan control.
- **Updates**: Control status updates dynamically as players capture or lose regular hexes.




### Area Calculation
The area of a clan territory hex is approximately 7 times that of a regular hex:

A_clan ≈ 7 × A_regular ≈ 7 × 0.015 km² = 0.737 km²

![Clan Territory Example](media/nested-hexes.png)

## Global Layer

- **Overview**: Displays a worldwide view of all captured territories.
- **Purpose**: Shows total territories controlled by clans and their global presence.
- **Gameplay**: Helps clans strategize and visualize their influence on a planetary scale.