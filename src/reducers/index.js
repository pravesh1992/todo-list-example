import { combineReducers } from 'redux'
import visibilityFilter from '../reducers/visibilityFilter'
import todos from '../reducers/todos'

export default combineReducers({
    visibilityFilter,
    todos
})