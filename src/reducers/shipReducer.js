import { getShips } from '../utils/ships'

const initialState = {}

export default function shipReducer (state = initialState, action) {
    const { type, payload } = action

    if (type === 'INIT_SHIPS') {
        return {
            ...state,
            ...getShips(payload.width, payload.height),
        }
    }

    return state
}
