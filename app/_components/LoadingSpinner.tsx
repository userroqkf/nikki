import styles from "@/_styles/LoadingSpinner.module.css"

export default function LoadingSpinner() {
  return (
    <div className={styles.box}>
      <span className={styles.loader}></span>
    </div>
  )
}