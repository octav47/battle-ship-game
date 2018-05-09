import { createActions } from 'redux-actions'

export const { initShips, hitCell } = createActions({
    INIT_SHIPS: (width, height) => ({ width, height }),
    HIT_CELL: ({ x, y, ship }) => ({ x, y, ship })
})
