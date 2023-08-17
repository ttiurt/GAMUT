// css
import Sign from '../../components/Sign/Sign'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles.thesign}>
        <Sign />
      </div>
      <h1>GAMUT</h1>
      <div className={styles.body}>
        <p className={styles.bodyTXT}><span className={styles.abt}>ABOUT</span> <span className={styles.keyWords}>Gamut</span> is a <span className={styles.keyWords}>creative practice</span> rooted in layered narratives and built on partnerships, pulling in collaborators who are the best in their class. We partner with innovative brands and individuals by developing <span className={styles.keyWords}>holistic brands</span> through strategy, design and creative direction. &nbsp; &nbsp;&nbsp;<span className={styles.eml}>HELLO@GAMUTSTUDIO.CO</span></p>
      </div>
    </main>
  )
}

export default Landing