import {INCREASE_RESOURCES, ADD_INCOME_SOURCE, DECREASE_RESOURCES} from "./actionTypes";

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