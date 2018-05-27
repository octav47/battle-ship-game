import React from 'react'
import { connect } from 'react-redux'

import styles from 'Styles/ShipInfo.sass'

const ShipInfo = props => {
    const {
        I,
        L,
        Dot1,
        Dot2,
    } = props

    let dots = 0

    if (Dot1.alive) {
        dots++
    }

    if (Dot2.alive) {
        dots++
    }

    return (
        <div className={styles.container}>
            <div className={I.alive ? '' : styles.done}>
                <div className={styles.ship}>
                    I-ship
                </div>
                <div className={styles.counter}>
                    X {I.alive ? 1 : 0}
                </div>
            </div>
            <div className={L.alive ? '' : styles.done}>
                <div className={styles.ship}>
                    L-ship
                </div>
                <div className={styles.counter}>
                    X {L.alive ? 1 : 0}
                </div>
            </div>
            <div className={dots === 0 ? styles.done : ''}>
                <div className={styles.ship}>
                    Dot-ship
                </div>
                <div className={styles.counter}>
                    X {dots}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { I, L, Dot1, Dot2 } = state.game

    return {
        I,
        L,
        Dot1,
        Dot2,
    }
}

export default connect(mapStateToProps)(ShipInfo)
