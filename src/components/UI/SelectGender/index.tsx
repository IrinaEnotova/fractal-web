import cls from '../../../utils/classnames';
import styles from './Select.module.css';

export default function SelectGender() {
  return (
    <div>
      <label className={styles.label}>
        <span>Пол</span>
        <select id="field-sex" className={cls(styles.select, 'error-input')}>
          <option value="">Не выбрано</option>
          <option value="male" id="field-sex-option-man">
            мужской
          </option>
          <option value="female" id="field-sex-option-woman">
            женский
          </option>
        </select>
      </label>
      {/* <div className="error-message">{errors.gender?.message}</div> */}
    </div>
  );
}
