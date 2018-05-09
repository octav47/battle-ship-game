import React from 'react'
import { connect } from 'react-redux'
import { initShips } from '../actions/shipActions'

import styles from './styles/GameStatusHandler.sass'

class GameStatusHandler extends React.Component {
    handleRestartGame = () => {
        const { width, height, restartGame } = this.props

        restartGame(width, height)
    }

    render () {
        const { victory } = this.props

        if (!victory) {
            return null
        }

        return (
            <div className={styles.popupContainer}>
                <div className={styles.popup}>
                    <div className={styles.title}>
                        Victory!
                    </div>
                    <button onClick={this.handleRestartGame}>
                        Restart
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { I, L, Dot1, Dot2 } = state.game

    return {
        width: state.game.width,
        height: state.game.height,
        victory: !(I.alive || L.alive || Dot1.alive || Dot2.alive)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        restartGame: (width, height) => {
            dispatch(initShips(width, height))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStatusHandler)
