import { combineReducers } from 'redux'
import gameReducer from 'Reducers/gameReducer'

const rootReducer = combineReducers({
    game: gameReducer,
})

export default rootReducer
