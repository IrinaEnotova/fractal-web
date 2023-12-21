import { FormEvent, InputHTMLAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from '../../../utils/classnames';
import deleteIcon from '../../../assets/delete-icon.svg';
import plusIcon from '../../../assets/plus-icon.svg';
import styles from './MultiInput.module.css';
import Button from '../Button';

interface MultiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputs: { id: string; text: string }[];
  changeInputs: (value: { id: string; text: string }[]) => void;
}

export default function MultiInput({ inputs, changeInputs, ...props }: MultiInputProps) {
  const deleteItem = (itemNumber: string) => {
    changeInputs(inputs.filter((input) => input.id !== itemNumber));
  };

  const addItem = (event: FormEvent) => {
    event.preventDefault();
    changeInputs([...inputs, { id: uuidv4(), text: '' }]);
  };

  return (
    <div>
      <label className={styles.label}>
        <span>Преимущества</span>
        {inputs.map((item) => (
          <div key={item.id} className={styles.inputWrapper}>
            <input
              {...props}
              value={inputs.find((input) => item.id === input.id)?.text}
              onChange={(event) => {
                changeInputs(
                  inputs.reduce((acc: { id: string; text: string }[], input) => {
                    if (input.id === item.id) {
                      input.text = event.target.value;
                      acc.push(input);
                      return acc;
                    } else {
                      acc.push(input);
                      return acc;
                    }
                  }, [])
                );
              }}
              id={`field-advatages-${item}`}
              className={cls(styles.input, 'error-input')}
              type="text"
              autoComplete="off"
              placeholder="Placeholder"
            />
            <img
              id={`button-remove-${item}`}
              className={styles.deleteItem}
              onClick={() => deleteItem(item.id)}
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
