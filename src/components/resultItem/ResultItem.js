import styles from "./ResultItem.module.scss";

export const ResultItem = ({ label, value }) => {
  return (
    <div className={styles.calculation_container}>
      <div className={styles.calculation}>
        <p>{label}</p>
        <h2>{value} &#8381;</h2>
      </div>
    </div>
  );
};
