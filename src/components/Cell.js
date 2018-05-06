import React from 'react'

import styles from './styles/Cell.sass'

class Cell extends React.Component {
    render () {
        const { x, y } = this.props

        return (
            <div className={styles.cell}>
                {x},{y}
            </div>
        )
    }
}

export default Cell
