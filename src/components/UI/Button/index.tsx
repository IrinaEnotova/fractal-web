import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from '../../../utils/classnames';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'secondary';
}

export default function Button({ children, appearance, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cls(
        styles.button,
        appearance === 'primary' && styles.primary,
        appearance === 'secondary' && styles.secondary
      )}
    >
      {children}
    </button>
  );
}
