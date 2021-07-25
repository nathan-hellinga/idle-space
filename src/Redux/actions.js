import {
  ADD_BUILDING,
  ADD_INCOME_SOURCE,
  ADD_MESSAGE,
  ASSIGN_COLONIST,
  BUY_UPGRADE,
  CLEAR_MESSAGES,
  CLOSE_STORY,
  DECREASE_COLONY_RESOURCE,
  DECREASE_RESOURCES,
  INCREASE_COLONY_RESOURCE,
  INCREASE_RESOURCES,
  PRESTIGE,
  RECEIVE_MESSAGE,
  TOGGLE_PAUSE,
  UN_ASSIGN_COLONIST,
} from "./actionTypes";

export const increaseResources = (amount) => ({
  type: INCREASE_RESOURCES,
  payload: amount
})

export const decreaseResources = (amount) => ({
  type: DECREASE_RESOURCES,
  payload: amount
})

/**
 *
 * @param type the type of income source to add
 * @param count the current count of this income source
 * @param price the price the income source currently costs
 */
export const addIncomeSource = (type, count, price, prestige) => ({
  type: ADD_INCOME_SOURCE,
  payload: {
    type, count, price, prestige
  }
})

export const buyUpgrade = (id, price, prestige) => ({
  type: BUY_UPGRADE,
  payload: {
    id,
    price,
    prestige
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

export const clearMessages = (index) => ({
  type: CLEAR_MESSAGES,
  payload: {}
})

export const togglePaused = () => ({
  type: TOGGLE_PAUSE,
  payload: {}
})

export const prestige = (currentPrestige, keepPercent) => ({
  type: PRESTIGE,
  payload: {
    currentPrestige,
    keepPercent
  }
})

export const closeStory = (type) => ({
  type: CLOSE_STORY,
  payload: {
    type
  }
})

export const increaseColonyResources = (increases) => ({
  type: INCREASE_COLONY_RESOURCE,
  payload: {
    increases
  }
})

export const decreaseColonyResources = (decreases) => ({
  type: DECREASE_COLONY_RESOURCE,
  payload: {
    decreases
  }
})

export const addBuilding = (type, count, price,) => ({
  type: ADD_BUILDING,
  payload: {
    type,
    count,
    price
  }
})

export const assignColonist = (type) => ({
  type: ASSIGN_COLONIST,
  payload: {
    type
  }
})

export const unAssignColonist = (type) => ({
  type: UN_ASSIGN_COLONIST,
  payload: {
    type
  }
})













