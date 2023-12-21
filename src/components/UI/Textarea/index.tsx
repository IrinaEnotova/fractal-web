import { TextareaHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Textarea.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegister<{
    about: string;
  }>;
  errors: FieldErrors<{
    about: string;
  }>;
}

export default function Textarea({ register, errors, label, ...props }: TextareaProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>{label}</span>
        <textarea
          {...props}
          {...register('about')}
          className={cls(styles.input, 'error-input')}
          autoComplete="off"
          placeholder="Placeholder"
        />
        <div className={styles.tip}>{errors.about?.message}</div>
      </label>
    </div>
  );
}
