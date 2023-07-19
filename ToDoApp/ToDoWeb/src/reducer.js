import { combineReducers } from 'redux'

import todosReducer from './tasks/tasksSlice'

const rootReducer = combineReducers({
  tasks: todosReducer
})

export default rootReducer