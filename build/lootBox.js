/*
  lootBox - A simple JavaScript loot box system

  Author: Raphyah
  License: GNU General Public License version 3
  GitHub: https://www.github.com/Raphyah

  Description:
  This script provides a basic loot box system for random item generation based on defined tiers.

  Usage:
  - Call lootBox(itemTiers) with an object containing item tiers and their respective rates and items.
  - The result is a randomly selected item based on the defined rates.

  Example:
  const result = lootBox({
    common: { rate: 0.5, items: ['Common Item 1', 'Common Item 2'] },
    uncommon: { rate: 0.25, items: ['Uncommon Item 1', 'Uncommon Item 2'] },
    // ... Add more tiers as needed
  });

  Date: January 17, 2024
*/
function pickRandomItem(itemList = []) {
  if (itemList?.constructor !== Array) {
    throw new Error('Invalid itemList');
  }
  return itemList[Math.floor(Math.random() * itemList.length)];
}
export default function lootBox(tierList = {}) {
  if (tierList?.constructor !== Object) {
    throw new Error('Invalid tierList');
  }
  const rate = Math.random();
  let currentRate = 0;
  for (const [key, tier] of Object.entries(tierList)) {
    if (tier.rate?.constructor !== Number) {
      throw new Error(`Invalid ${key} rate field`);
    }
    currentRate += tier.rate;
    if (currentRate > rate) {
      return { tier: key, item: pickRandomItem(tier.items) };
    }
  }
}