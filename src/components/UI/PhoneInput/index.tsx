import { useRef } from 'react';
import styles from './PhoneInput.module.css';

interface PhoneInputProps {
  phone: string;
  changePhone: (value: string) => void;
  errors: {
    email: string;
    phone: string;
  };
}

export default function PhoneInput({ errors, changePhone }: PhoneInputProps) {
  const inputCard = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const cardValue = inputCard
      .current!.value.replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputCard.current!.value = !cardValue![2]
      ? `+${cardValue![1].replace(/./, '7')}`
      : `+${cardValue![1]} ${cardValue![2]}${`${cardValue![3] ? ` ${cardValue![3]}` : ''}`}${`${
          cardValue![4] ? `-${cardValue![4]}` : ''
        }${`${cardValue![5] ? `-${cardValue![5]}` : ''}`}`}`;
    changePhone(cardValue![0]);
  };

  return (
    <label className={styles.label}>
      <span>Номер телефона</span>
      <input
        className={styles.input}
        type="text"
        ref={inputCard}
        onChange={handleChange}
        required
        placeholder="+7 999 999-99-99"
      />
      <div className={styles.tip}>{errors.phone}</div>
    </label>
  );
}
