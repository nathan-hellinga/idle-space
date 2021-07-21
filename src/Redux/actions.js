import {
  INCREASE_RESOURCES,
  ADD_INCOME_SOURCE,
  DECREASE_RESOURCES,
  BUY_UPGRADE,
  ADD_MESSAGE,
  RECEIVE_MESSAGE
} from "./actionTypes";

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

export const addMessage = (message, delay = 3) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    delay
  }
})

export const receiveMessage = (index) => ({
  type: RECEIVE_MESSAGE,
  payload: {
    index,
  }
})