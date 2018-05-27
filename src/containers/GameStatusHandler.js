import React from 'react'
import { connect } from 'react-redux'
import { initShips } from 'Actions/shipActions'
import { VictoryPopup } from 'Components/'

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
            <VictoryPopup onRestart={this.handleRestartGame} />
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
