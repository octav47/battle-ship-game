import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CellContainer } from 'Containers'
import { initShips } from 'Actions/shipActions'

class Grid extends React.Component {
    componentWillMount () {
        const { init } = this.props

        init()
    }

    render () {
        const { width, height, grid } = this.props

        const rows = []

        for (let i = 0; i < height; i++) {
            const row = []

            for (let j = 0; j < width; j++) {
                row.push(
                    <CellContainer
                        key={j}
                        x={i}
                        y={j}
                        value={grid && grid[i][j]} />,
                )
            }

            rows.push(
                <div key={i}>
                    {row}
                </div>,
            )
        }

        return rows
    }
}

Grid.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    grid: PropTypes.array,
    init: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        width: state.game.width,
        height: state.game.height,
        grid: state.game.grid,
    }
}

const mergeProps = (stateProps, { dispatch }) => {
    const { width, height, grid } = stateProps

    const init = () => {
        dispatch(initShips(width, height))
    }

    return {
        width,
        height,
        grid,
        init,
    }
}

export default connect(mapStateToProps, null, mergeProps)(Grid)
