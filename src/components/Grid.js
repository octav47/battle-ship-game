import React from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'
import { initShips } from '../actions/shipActions'

class Grid extends React.Component {
    componentWillMount () {
        const { width, height, initShips } = this.props

        initShips(width, height)
    }

    render () {
        const { width, height, grid } = this.props

        console.log(grid)

        const rows = []

        for (let i = 0; i < height; i++) {
            const row = []

            for (let j = 0; j < width; j++) {
                row.push(
                    <Cell
                        key={j}
                        x={i}
                        y={j}
                        value={grid && grid[i][j]}/>,
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

const mapStateToProps = state => {
    return {
        width: state.game.width,
        height: state.game.height,
        grid: state.game.grid,
    }
}

const mapDispatchToProps = (dispatch, ...args) => {
    return {
        initShips: (width, height) => {
            dispatch(initShips(width, height))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
