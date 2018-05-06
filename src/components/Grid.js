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
        const { width, height } = this.props

        const rows = []

        for (let i = 0; i < height; i++) {
            const row = []

            for (let j = 0; j < width; j++) {
                row.push(
                    <Cell
                        key={j}
                        x={i}
                        y={j} />,
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

const mapDispatchToProps = (dispatch, ...args) => {
    return {
        initShips: (width, height) => {
            dispatch(initShips(width, height))
        },
    }
}

export default connect(null, mapDispatchToProps)(Grid)
