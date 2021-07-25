import {ResearchObjects} from "../GameData/ResearchObjects";

export default function checkResearchUnlockable(id, purchasedUpgrades, incomeSources) {
  // if we already researched it return false
  if(purchasedUpgrades.some(x => x === id)) return false;

  // return false if there are any dependencies that we have not purchased yet
  const item = ResearchObjects.find(x => x.id === id);
  for (const dependency of item.dependencies) {
    if(!purchasedUpgrades.some(x => x === dependency)) return false;
  }

  // return false if we dont own any of the fabType the upgrade is for
  if(incomeSources[item.fabType] <= 0) return false

  return true;
}