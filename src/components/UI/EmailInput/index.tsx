import { InputHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './EmailInput.module.css';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  email: string;
  changeEmail: (value: string) => void;
  errors: {
    email: string;
    phone: string;
  };
}

export default function EmailInput({ errors, className, email, changeEmail, ...props }: EmailInputProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>Email</span>
        <input
          {...props}
          className={cls(styles.input, className)}
          type="text"
          autoComplete="off"
          value={email}
          onChange={(event) => changeEmail(event.target.value)}
        />
        <div className={styles.tip}>{errors.email}</div>
      </label>
    </div>
  );
}
