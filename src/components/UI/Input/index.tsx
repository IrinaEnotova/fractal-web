import { InputHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>{label}</span>
        <input
          {...props}
          // {...register('name')}
          className={cls(styles.input, 'error-input')}
          type="text"
          autoComplete="off"
        />
        <div className={styles.tip}>Tip</div>
      </label>
    </div>
  );
}
