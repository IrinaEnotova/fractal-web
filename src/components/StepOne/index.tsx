import { FormEvent } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './StepOne.module.css';
import { useNavigate } from 'react-router-dom';
import SelectGender from '../UI/SelectGender';

type StepOneProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepOne({ changeActiveStep }: StepOneProps) {
  const navigate = useNavigate();

  const handlePrevClick = (event: FormEvent) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input id="field-nickname" label="Никнейм" placeholder="Placeholder" />
        <Input id="field-name" label="Имя" placeholder="Placeholder" />
        <Input id="field-username" label="Фамилия" placeholder="Placeholder" />
        <SelectGender />
      </div>
      <div className={styles.btns}>
        <Button id="button-back" appearance="secondary" onClick={handlePrevClick}>
          Назад
        </Button>
        <Button
          id="button-next"
          appearance="primary"
          onClick={() => {
            changeActiveStep(2);
          }}
        >
          Далее
        </Button>
      </div>
    </form>
  );
}
