import deepClone from 'deepcloneobject'
import { INIT_SHIPS, HIT_CELL } from 'Consts/gameConsts'
import { getShips } from 'Utils/ships'

const initialState = {
    width: 10,
    height: 10,
    grid: null,
    I: null,
    L: null,
    Dot1: null,
    Dot2: null,
}

export default function gameReducer (state = initialState, action) {
    const { type, payload } = action

    if (type === INIT_SHIPS) {
        const { width, height } = payload
        const grid = []

        for (let i = 0; i < width; i++) {
            const row = []

            for (let j = 0; j < height; j++) {
                row.push({
                    hit: false,
                    ship: null,
                    shipBorder: [],
                })
            }

            grid.push(row)
        }

        return {
            ...state,
            ...getShips({
                grid,
                width,
                height,
            }),
        }
    }

    if (type === HIT_CELL) {
        const { x, y, ship } = payload
        const newState = deepClone(state)
        const { grid } = newState

        grid[x][y] = {
            ...grid[x][y],
            hit: true,
        }

        if (ship) {
            const shipData = newState[ship]
            const { area } = shipData

            for (const point of area) {
                grid[point[0]][point[1]] = {
                    ...grid[point[0]][point[1]],
                    hit: true,
                }
            }

            newState[ship] = {
                ...shipData,
                alive: false,
            }
        }

        return {
            ...newState,
            grid,
        }
    }

    return state
}
