import React from 'react'
import { connect } from 'react-redux'

import { hitCell } from 'Actions/shipActions'

import { Cell } from 'Components/'

class CellContainer extends React.Component {
    handleHit = () => {
        const { x, y, value, hitCell } = this.props

        hitCell(x, y, value.ship)
    }

    render () {
        return (
            <Cell {...this.props} onClick={this.handleHit} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        hit: state.game.grid ? state.game.grid[ownProps.x][ownProps.y].hit : false,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hitCell: (x, y, ship) => {
            dispatch(hitCell({ x, y, ship }))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer)
