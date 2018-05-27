import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initShips } from 'Actions/shipActions'
import { VictoryPopup } from 'Components/'

class GameStatusHandler extends React.Component {
    handleRestartGame = () => {
        const { restartGame } = this.props

        restartGame()
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

GameStatusHandler.propTypes = {
    victory: PropTypes.bool,
    restartGame: PropTypes.func,
}

const mapStateToProps = state => {
    const { I, L, Dot1, Dot2 } = state.game

    return {
        width: state.game.width,
        height: state.game.height,
        victory: !(I.alive || L.alive || Dot1.alive || Dot2.alive),
    }
}

const mergeProps = (stateProps, { dispatch }) => {
    const { width, height, victory } = stateProps

    const restartGame = () => {
        dispatch(initShips(width, height))
    }

    return {
        width,
        height,
        victory,
        restartGame,
    }
}

export default connect(mapStateToProps, null, mergeProps)(GameStatusHandler)
