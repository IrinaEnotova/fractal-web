import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './MainPageForm.module.css';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPageForm() {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate('/profile');
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
