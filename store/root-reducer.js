import { counterReducer, timerReducer } from './post/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  counter: counterReducer,
  timer: timerReducer,
})