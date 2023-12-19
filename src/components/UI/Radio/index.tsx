import styles from './Radio.module.css';

export default function Radio() {
  const radios = [1, 2, 3];

  return (
    <div>
      <legend className={styles.legend}>Radio группа</legend>
      {radios.map((radio) => (
        <div className={styles.radio} key={radio}>
          <input type="radio" id={`field-radio-group-option-${radio}`} name="radio-group" value={radio} />
          <label className={styles.label} htmlFor={`${radio}`}>
            {radio}
          </label>
        </div>
      ))}
    </div>
  );
}
