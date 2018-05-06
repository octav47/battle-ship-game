import { combineReducers } from 'redux'
import shipReducer from './shipReducer'

const rootReducer = combineReducers({
    ships: shipReducer,
})

export default rootReducer
