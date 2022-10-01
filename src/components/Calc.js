import styles from "./Calc.module.scss";

export const Calc = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
        </div>
        <div className={styles.input_container}>
          <p>Стоимость автомобиля</p>
          <div className={styles.input}>
            <span className={styles.value_container}>
              <span className={styles.value}>0</span>
            </span>
            <input type="range" min="0" max="100"></input>
          </div>
        </div>
        <div className={styles.input_container2}>
          <p>Первоначальный взнос</p>
          <div className={styles.input2}>
            <div>
              <span>0</span>
            </div>
            <input type="range" min="0" max="100"></input>
          </div>
        </div>
        <div className={styles.input_container3}>
          <p>Срок лизинга</p>
          <div className={styles.input3}>
            <div>
              <span>0</span>
            </div>
            <input type="range" min="0" max="100"></input>
          </div>
        </div>
        <div className={styles.calculation_container}>
          <div className={styles.calculation}>
            <p>Сумма договора лизинга</p>
            <h2>0</h2>
          </div>
        </div>
        <div className={styles.calculation_container2}>
          <div className={styles.calculation2}>
            <p>Ежемесячный платеж от</p>
            <h2>0</h2>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.button}>
            <span className={styles.button_text}>Оставить заявку</span>
          </button>
        </div>
      </div>
    </section>
  );
};
