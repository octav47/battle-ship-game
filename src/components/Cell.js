import React from 'react'
import styles from 'Styles/Cell.sass'

const Cell = ({ x, y, value, hit, onClick }) => {
    const classNames = [styles.cell]

    if (hit) {
        classNames.push(styles.hit)

        if (value && value.ship) {
            classNames.push(styles.ship)
        }
    }

    if (value && value.ship) {
        classNames.push(styles.ship)
    }

    return (
        <div
            className={classNames.join(' ')}
            onClick={onClick} />
    )
}

export default Cell
