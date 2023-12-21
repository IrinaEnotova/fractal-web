import { InputHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>{label}</span>
        <input
          {...props}
          // {...register('name')}
          className={cls(styles.input, className)}
          type="text"
          autoComplete="off"
        />
        <div className={styles.tip}></div>
      </label>
    </div>
  );
}
