import { FormEvent, useRef } from 'react';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import MultiInput from '../UI/MultiInput';
import Radio from '../UI/Radio';
import styles from './StepTwo.module.css';

type StepTwoProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepTwo({ changeActiveStep }: StepTwoProps) {
  const form = useRef(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    changeActiveStep(3);
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <MultiInput />
        <Checkbox />
        <Radio />
      </div>
      <div className={styles.btns}>
        <Button id="button-back" appearance="secondary" onClick={() => changeActiveStep(1)}>
          Назад
        </Button>
        <Button id="button-next" appearance="primary">
          Далее
        </Button>
      </div>
    </form>
  );
}
