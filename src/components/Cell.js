import React from 'react'
import { connect } from 'react-redux'

import { hitCell } from '../actions/shipActions'

import styles from './styles/Cell.sass'

class Cell extends React.Component {
    handleHit = () => {
        const { x, y, value, hitCell } = this.props

        hitCell(x, y, value.ship)
    }

    render () {
        const { x, y, value, hit } = this.props
        const classNames = [styles.cell]

        if (hit) {
            classNames.push(styles.hit)

            if (value && value.ship) {
                classNames.push(styles.ship)
            }
        }

        if (value && value.ship) {
            classNames.push(styles.ship)
        }

        return (
            <div
                className={classNames.join(' ')}
                onClick={this.handleHit} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        hit: state.game.grid ? state.game.grid[ownProps.x][ownProps.y].hit : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hitCell: (x, y, ship) => {
            dispatch(hitCell({ x, y, ship }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
