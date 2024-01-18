# lootBox

A simple JavaScript loot box system.

This script provides a basic loot box system for random item generation based on defined tiers.

## Usage

- Call lootBox(itemTiers) with an object containing item tiers and their respective rates and items.
  - The result is a randomly selected item based on the defined rates.

### Example

```js
const result = lootBox({
  common: { rate: 0.5, items: ['Common Item 1', 'Common Item 2'] },
  uncommon: { rate: 0.25, items: ['Uncommon Item 1', 'Uncommon Item 2'] },
  // ... Add more tiers as needed
})
```
