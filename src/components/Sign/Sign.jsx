import styles from './Sign.module.css';

const Sign = () => {
  return (
    <div className={styles.cnstrcsgn}>
      <div className={styles.wire}></div>
      <div className={styles.sign}>
        <h4 className={styles.smalltxt}>THIS IS AWKWARD</h4>
        <h2 className={styles.bigtxt}>UNDER CONSTRUCTION</h2>
        <h4 className={styles.smalltxt}>OUR WEBSITE IS GETTING A TUNE UP, BUT WE’RE STILL BUSINESS AS USUAL</h4>
      </div>
    </div>
  )
}

export default Sign