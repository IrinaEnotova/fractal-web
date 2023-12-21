import { InputHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Input.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: 'nickname' | 'firstName' | 'lastName';
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
  label: string;
  className?: string;
}

export default function Input({ inputName, register, errors, label, className, ...props }: InputProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>{label}</span>
        <input
          {...props}
          {...register(inputName)}
          className={cls(styles.input, className)}
          type="text"
          autoComplete="off"
        />
        <div className={styles.tip}>{errors[inputName]?.message}</div>
      </label>
    </div>
  );
}
