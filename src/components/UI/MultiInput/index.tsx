import { FormEvent, InputHTMLAttributes, useState } from 'react';
import cls from '../../../utils/classnames';
import deleteIcon from '../../../assets/delete-icon.svg';
import plusIcon from '../../../assets/plus-icon.svg';
import styles from './MultiInput.module.css';
import Button from '../Button';

interface MultiInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function MultiInput({ ...props }: MultiInputProps) {
  const [inputNumbers, seInputNumber] = useState([1, 2, 3]);

  const deleteItem = (itemNumber: number) => {
    seInputNumber(inputNumbers.filter((inputNumber) => inputNumber !== itemNumber));
  };

  const addItem = (event: FormEvent) => {
    event.preventDefault();
    seInputNumber([...inputNumbers, Math.max(...inputNumbers) + 1]);
  };

  return (
    <div>
      <label className={styles.label}>
        <span>Преимущества</span>
        {inputNumbers.map((item) => (
          <div key={item} className={styles.inputWrapper}>
            <input
              {...props}
              id={`field-advatages-${item}`}
              className={cls(styles.input, 'error-input')}
              type="text"
              autoComplete="off"
              placeholder="Placeholder"
            />
            <img
              id={`button-remove-${item}`}
              className={styles.deleteItem}
              onClick={() => deleteItem(item)}
              src={deleteIcon}
              alt="Delete"
            />
          </div>
        ))}
        <Button onClick={addItem} className={styles.addBtn} appearance="secondary">
          <img src={plusIcon} alt="+" />
        </Button>
      </label>
    </div>
  );
}
