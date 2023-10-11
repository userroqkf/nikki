import styles from "@/_styles/LoadingSpinnerDynamic.module.css"

export default function LoadingSpinnerDynamic() {
  return (
    <div className={styles.box}>
      <span className={styles.loader}></span>
    </div>
  )
}