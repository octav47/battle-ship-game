import React from 'react'
import { ShipInfo } from 'Components/'
import { Grid, GameStatusHandler } from 'Containers/'

import styles from 'Styles/App.sass'

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
