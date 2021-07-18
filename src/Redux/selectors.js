import {fabObjects} from "../GameData/FabObjects";

export const getResources = store => store.resources.current;
export const getIncomeSources = store => store.sources;

export const getSourceCurrentIncomes = store => {
  // todo multiply each source by any upgrades
  let incomes = {}
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails)
      incomes[sourceType] = fabDetails.baseIncome * count;
  }
  return incomes;
};


export const getIncomePerSecond = store => {
  // calculate the total income / second
  let total = 0;
  for (const [sourceType, count] of Object.entries(store.sources)) {
    const fabDetails = fabObjects[sourceType];
    if (fabDetails)
      total += fabDetails.baseIncome * count;
  }
  return total;
}
