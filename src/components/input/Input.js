import styles from "./Input.module.scss";

export const Input = ({
  label,
  value,
  onChange,
  defaultValue,
  min,
  max,
  symbol,
}) => {
  return (
    <div className={styles.input_container}>
      <p>{label}</p>
      <div className={styles.input}>
        <span className={styles.value_container}>
          <input
            type="text"
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            className={styles.value}
          ></input>
          <span className={styles.symbol}>{symbol}</span>
        </span>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={styles.slider}
        ></input>
      </div>
    </div>
  );
};
