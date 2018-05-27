import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { hitCell } from 'Actions/shipActions'

import { Cell } from 'Components/'

class CellContainer extends React.Component {
    handleHit = () => {
        const { handleHit } = this.props

        handleHit()
    }

    render () {
        const { value, hit } = this.props

        return (
            <Cell
                value={value}
                hit={hit}
                onClick={this.handleHit} />
        )
    }
}

CellContainer.propTypes = {
    value: PropTypes.object,
    hit: PropTypes.bool,
    handleHit: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
    return {
        hit: state.game.grid ? state.game.grid[ownProps.x][ownProps.y].hit : false,
    }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    const {
        x,
        y,
        value,
    } = ownProps

    const handleHit = () => {
        if (value) {
            const { ship } = value

            dispatch(hitCell({ x, y, ship }))
        }
    }

    return {
        x,
        y,
        value,
        ...stateProps,
        handleHit,
    }
}

export default connect(mapStateToProps, null, mergeProps)(CellContainer)
