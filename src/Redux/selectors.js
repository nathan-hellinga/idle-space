import {fabObjects} from "../GameData/FabObjects";
import {ResearchObjects} from "../GameData/ResearchObjects";
import {colonyObjects} from "../GameData/colonyObjects";

export const getResources = store => store.resources.current;
export const getIncomeSources = store => store.sources;

export const getSourceCurrentIncomes = store => {
  // todo multiply each source by any upgrades
  let incomes = {}
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails){
      let multiplier = 1;
      for (const upgradeId of store.upgrades) {
        const upgrade = ResearchObjects.find(x => x.id === upgradeId);
        if(upgrade?.fabType === sourceType){
          multiplier = multiplier * upgrade.multiplier;
        }
      }
      incomes[sourceType] = fabDetails.baseIncome * count * multiplier;
    }
  }
  return incomes;
};


export const getIncomePerSecond = store => {
  // calculate the total income / second
  let total = 0;
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails){
      let multiplier = 1;
      for (const upgradeId of store.upgrades) {
        const upgrade = ResearchObjects.find(x => x.id === upgradeId);
        if(upgrade?.fabType === sourceType){
          multiplier = multiplier * upgrade.multiplier;
        }
      }
      total += fabDetails.baseIncome * count * multiplier;
    }
  }
  return total;
}

export const getResearched = store => {
  return store.upgrades;
}

export const getColonyResources = store => {
  let resourcesCopy = {...store.colony.resources};
  for (const [key, value] of Object.entries(resourcesCopy)) {
    resourcesCopy[key] = Math.floor(value);
  }
  return resourcesCopy;
}

export const getColonyResourcesPerSecond = store => {
  let incomes = {};
  for (const [key, value] of Object.entries(store.colony.assignments)) {
    const details = colonyObjects[key];
    if(!details) continue;
    incomes[details.output] = value * details.outputRate;
  }
  return incomes;
}

export const getColonistAssignments = store => {
  return store.colony.assignments;
}

export const listenCommunications = store => {
  return store.communications.slice(-20).reverse();
}
