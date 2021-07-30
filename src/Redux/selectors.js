import {fabObjects} from "../GameData/FabObjects";
import {ResearchObjects} from "../GameData/ResearchObjects";
import {colonyObjects} from "../GameData/colonyObjects";

export const getResources = store => store.resources.current;
export const getIncomeSources = store => store.sources;

export const getSourceCurrentIncomes = store => {
  let multiplier = 1;
  if(store?.colony?.research?.includes('mining 1'))
    multiplier *= 5;

  let incomes = {}
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails){
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
  // global upgrades
  let multiplier = 1;
  if(store?.colony?.research?.includes('mining 1'))
    multiplier *= 1.5;
  if(store?.colony?.research?.includes('mining 2'))
    multiplier *= 1.5;
  if(store?.colony?.research?.includes('mining 3'))
    multiplier *= 1.5;
  if(store?.colony?.research?.includes('mining 4'))
    multiplier *= 1.5;
  if(store?.colony?.research?.includes('mining 5'))
    multiplier *= 1.5;


  // calculate the total income / second
  let total = 0;
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails){
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
  let multipliers = Object.entries(colonyObjects)
    .reduce((a, [key, value]) => {
      for (const output of value.outputs) {
        a[output.name] = 1;
      }
      for (const output of value.inputs) {
        a[output.name] = 1;
      }
      return a;
    }, {})
  let incomes = {};
  loop:
  for (const [key, value] of Object.entries(store.colony.assignments)) {
    const details = colonyObjects[key];
    if(!details) continue;

    // if there are inputs, make sure we have enough to proceed else abort
    let incomesCopy = {...incomes}; // change the copy, if we cant pay all inputs the copy is discarded
    for (const input of details.inputs) {
      const inputRate = input.numerator/input.denominator * value;
      if((store.colony.resources[input.name] ?? 0) < inputRate){
        continue loop;
      }else{
        incomesCopy[input.name] = (incomesCopy[input.name] ?? 0) - inputRate;
      }
    }
    incomes = incomesCopy;  // since we can pay all inputs, we use the copy
    for (const output of details.outputs) {
      const outputRate = output.numerator/output.denominator * value;
      incomes[output.name] = (incomesCopy[output.name] ?? 0) + outputRate;
    }
  }


  // apply multipliers
  if(store.colony.research.includes("biomass efficiency 1"))
    multipliers.biomass *= 2;
  if(store.colony.research.includes("biomass efficiency 2"))
    multipliers.biomass *= 2;
  if(store.colony.research.includes("night vision goggles")){
    multipliers.tech *= 1.5;
    multipliers.meds *= 1.25;
  }
  if(store.colony.research.includes("antibiotics"))
    multipliers.meds *= 1.75;
  if(store.colony.research.includes("prayer beads"))
    multipliers.favour *= 2;
  if(store.colony.research.includes("genetics"))
    multipliers.population *= 2;


  // multiply income by multipliers
  for (const [key, value] of Object.entries(incomes)) {
    incomes[key] *= multipliers[key]
  }

  return incomes;
}

export const getColonistAssignments = store => {
  return store.colony.assignments;
}

export const listenCommunications = store => {
  return store.communications.slice(-20).reverse();
}
