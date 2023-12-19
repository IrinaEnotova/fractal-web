import { useRef } from 'react';
import styles from './PhoneInput.module.css';

export default function PhoneInput() {
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
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        ref={inputCard}
        onChange={handleChange}
        placeholder="+7 999 999-99-99"
      />
    </>
  );
}
