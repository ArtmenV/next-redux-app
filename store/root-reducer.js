import { counterReducer, timerReducer } from './common/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  counter: counterReducer,
  timer: timerReducer,
})