import styles from './Sign.module.css';

const Sign = () => {
  return (
    <div className={styles.cnstrcsgn}>
      <div className={styles.wire}>
        <img className={styles.wireimg} src="/wire.png" alt="" />
      </div>
      <div className={styles.sign}>
        <a href="mailto:HELLO@GAMUTSTUDIO.CO"><img className={styles.sgnimg} src="/sign.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Sign