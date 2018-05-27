import React from 'react'
import PropTypes from 'prop-types'
import styles from 'Styles/Cell.sass'

const Cell = ({ value, hit, onClick }) => {
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

Cell.propTypes = {
    value: PropTypes.object,
    hit: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Cell
