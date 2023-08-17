// css
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <h1>GAMUT</h1>
      <div className={styles.body}>
        
        <p className={styles.bodyTXT}><span className={styles.abt}>ABOUT</span> &nbsp;<span className={styles.keyWords}>Gamut</span> is a <span className={styles.keyWords}>creative practice</span> rooted in layered narratives and built on partnerships, pulling in collaborators who are the best in their class. We partner with innovative brands and individuals by developing <span className={styles.keyWords}>holistic brands</span> through strategy, design and creative direction. <span className={styles.eml}>HELLO@GAMUTSTUDIO.CO</span></p>
      </div>
      
    </main>
  )
}

export default Landing