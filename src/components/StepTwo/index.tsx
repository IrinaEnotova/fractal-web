import { FormEvent, useRef, useState } from 'react';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import MultiInput from '../UI/MultiInput';
import Radio from '../UI/Radio';
import styles from './StepTwo.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/reduxHook';
import { setAdvantages } from '../../store/reducers/userSlice';

type StepTwoProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepTwo({ changeActiveStep }: StepTwoProps) {
  const form = useRef(null);
  const { advantages } = useAppSelector((state) => state.userReducer);
  let currentAdvantages;
  if (advantages.length >= 1) {
    currentAdvantages = advantages.map((advantageText, idx) => {
      console.log({ id: String(idx + 1), text: advantageText });
      return { id: String(idx + 1), text: advantageText };
    });
  }
  const defaultAdvantages = [
    { id: '1', text: '' },
    { id: '2', text: '' },
    { id: '3', text: '' },
  ];

  const [inputs, setInputs] = useState(currentAdvantages ? currentAdvantages : defaultAdvantages);
  const dispatch = useAppDispatch();

  const changeInputs = (value: { id: string; text: string }[]) => {
    setInputs(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const advantages = inputs.reduce((acc: string[], input) => {
      if (input.text) {
        acc.push(input.text);
        return acc;
      }
      return acc;
    }, []);
    dispatch(setAdvantages({ advantages }));
    changeActiveStep(3);
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <MultiInput inputs={inputs} changeInputs={changeInputs} />
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
