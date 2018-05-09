import React from 'react'
import { Grid, ShipInfo, GameStatusHandler } from './'

import styles from './styles/App.sass'

const App = () => {
    return (
        <div className={styles.container}>
            <Grid />
            <ShipInfo />
            <GameStatusHandler />
        </div>
    )
}

export default App
