import { TextareaHTMLAttributes } from 'react';
import cls from '../../../utils/classnames';
import styles from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label className={styles.label}>
        <span>{label}</span>
        <textarea
          {...props}
          // {...register('name')}
          className={cls(styles.input, 'error-input')}
          autoComplete="off"
          placeholder="Placeholder"
        />
      </label>
      {/* <div className="error-message">{errors.name?.message}</div> */}
    </div>
  );
}
