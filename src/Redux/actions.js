import {INCREASE_RESOURCES, ADD_INCOME_SOURCE, DECREASE_RESOURCES, BUY_UPGRADE} from "./actionTypes";

export const increaseResources = (amount) => ({
  type: INCREASE_RESOURCES,
  payload: amount
})

export const decreaseResources = (amount) => ({
  type: DECREASE_RESOURCES,
  payload: amount
})

export const addIncomeSource = (type) => ({
  type: ADD_INCOME_SOURCE,
  payload: {
    type
  }
})

export const buyUpgrade = (id) => ({
  type: BUY_UPGRADE,
  payload: {
    id
  }
})