import React from 'react'

import styles from 'Styles/VictoryPopup.sass'

const VictoryPopup = ({ onRestart }) => {
    return (
        <div className={styles.popupContainer}>
            <div className={styles.popup}>
                <div className={styles.title}>
                    Victory!
                </div>
                <button onClick={onRestart}>
                    Restart
                </button>
            </div>
        </div>
    )
}

export default VictoryPopup
