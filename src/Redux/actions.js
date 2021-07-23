import {
  INCREASE_RESOURCES,
  ADD_INCOME_SOURCE,
  DECREASE_RESOURCES,
  BUY_UPGRADE,
  ADD_MESSAGE, RECEIVE_MESSAGE, TOGGLE_PAUSE, CLEAR_MESSAGES, PRESTIGE, CLOSE_STORY,
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
export const addIncomeSource = (type, count, price) => ({
  type: ADD_INCOME_SOURCE,
  payload: {
    type, count, price
  }
})

export const buyUpgrade = (id, price) => ({
  type: BUY_UPGRADE,
  payload: {
    id,
    price
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