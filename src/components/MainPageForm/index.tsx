import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './MainPageForm.module.css';
import { FormEvent } from 'react';

export default function MainPageForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <label className={styles.label}>
          <span>Номер телефона</span>
          <PhoneInput />
        </label>
        <Input label="Email" placeholder="webstudio.fractal@example.com" />
      </div>
      <Button id="button-start" appearance="primary">
        Начать
      </Button>
    </form>
  );
}
