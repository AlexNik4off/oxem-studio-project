import styles from "./Calc.module.scss";
import { Input } from "./input/Input";
import { PercentInput } from "./input/PercentInput";
import CN from "classnames";
import { ResultItem } from "./resultItem/ResultItem";
import { useState } from "react";

export const Calc = () => {
  const [price, setPrice] = useState(3300000);
  const [percent, setPercent] = useState(13);
  const [term, setTerm] = useState(1);
  const absoluteValue = Math.round((percent / 100) * price);
  const monthPay = Math.round(
    (price - absoluteValue) *
      ((0.035 * Math.pow(1 + 0.035, term)) / (Math.pow(1 + 0.035, term) - 1))
  );
  const summ = Math.round(absoluteValue + term * monthPay);

  const setValue = ({ target }) => {
    let { value, min, max } = target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setPrice(value);
  };

  return (
    <section className={styles.container}>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className={CN(styles.row, styles.input_row)}>
        <Input
          label={"Стоимость автомобиля"}
          value={price}
          min={1000000}
          max={6000000}
          symbol={"₽"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <PercentInput
          label={"Первоначальный взнос"}
          min={10}
          max={60}
          value={percent}
          absoluteValue={absoluteValue}
          onChange={(e) => setPercent(e.target.value)}
        />
        <Input
          label={"Срок лизинга"}
          min={1}
          max={60}
          value={term}
          symbol={"мес."}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className={CN(styles.row, styles.calc_row)}>
        <ResultItem label={"Сумма договора лизинга"} value={summ} />
        <ResultItem label={"Ежемесячный платеж"} value={monthPay} />
        <div className={styles.button_container}>
          <button className={styles.button}>
            <span className={styles.button_text}>Оставить заявку</span>
          </button>
        </div>
      </div>
    </section>
  );
};
