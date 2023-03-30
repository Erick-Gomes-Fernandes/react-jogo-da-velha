import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

function Header () {
  return(
    <div className={styles.header}>
      <Title>Jogo da Véia</Title>
      <Subtitle>Criado por Erick Gomes</Subtitle>
    </div>
  )
}

export default Header