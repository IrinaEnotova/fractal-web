import styles from './Checkbox.module.css';

export default function Checkbox() {
  const checkboxes = [1, 2, 3];

  return (
    <div>
      <legend className={styles.legend}>Checkbox группа</legend>
      {checkboxes.map((checkbox) => (
        <div className={styles.checkbox} key={checkbox}>
          <input
            type="checkbox"
            id={`field-checkbox-group-option-${checkbox}`}
            name="checkbox-group"
            value={checkbox}
          />
          <label className={styles.label} htmlFor={`${checkbox}`}>
            {checkbox}
          </label>
        </div>
      ))}
    </div>
  );
}
