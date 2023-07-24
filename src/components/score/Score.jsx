import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score ({ circleWins, xWins }) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2>{circleWins}</h2>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="x" />
          <h2>{xWins}</h2>
        </div>
      </div>
    </>
  )
}

export default Score