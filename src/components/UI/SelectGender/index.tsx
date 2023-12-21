import { SelectHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Select.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface SelectGenderProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register: UseFormRegister<{
    nickname: string;
    firstName: string;
    lastName: string;
    gender: string;
  }>;
  errors: FieldErrors<{
    nickname: string;
    firstName: string;
    lastName: string;
    gender: string;
  }>;
}

export default function SelectGender({ register, errors }: SelectGenderProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>Пол</span>
        <select {...register('gender')} id="field-sex" className={cls(styles.select, 'error-input')}>
          <option value="">Не выбрано</option>
          <option value="male" id="field-sex-option-man">
            мужской
          </option>
          <option value="female" id="field-sex-option-woman">
            женский
          </option>
        </select>
        <div className={styles.tip}>{errors.gender?.message}</div>
      </label>
    </div>
  );
}
