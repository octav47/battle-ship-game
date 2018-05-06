import { createActions } from 'redux-actions'

export const { initShips } = createActions({
    INIT_SHIPS: (width, height) => ({ width, height })
})
