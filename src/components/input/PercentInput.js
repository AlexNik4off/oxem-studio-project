import styles from "./Input.module.scss";
import CN from "classnames";

export const PercentInput = ({
  label,
  value,
  onChange,
  defaultValue,
  min,
  max,
  absoluteValue,
}) => {
  return (
    <div className={styles.input_container}>
      <p>{label}</p>
      <div className={styles.input}>
        <span className={styles.value_container}>
          <p className={CN(styles.percent_absolute_value, styles.value)}>
            {absoluteValue}
          </p>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className={styles.input_percent}
          />
        </span>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={styles.slider}
        />
      </div>
    </div>
  );
};
