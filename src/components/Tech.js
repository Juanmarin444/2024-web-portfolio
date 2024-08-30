import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Tech = ({name, src}) => {
  return (
    <div className={styles.tech}>
      <section className={styles.techInfo}>
        <div className={styles.techIcon}>
          <Image alt={name} src={src} height={100} width={100}/>
        </div>
        <h3>{name}</h3>
      </section>
    </div>
  )
}

export default Tech
