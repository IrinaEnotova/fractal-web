import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import MultiInput from '../UI/MultiInput';
import Radio from '../UI/Radio';
import styles from './StepTwo.module.css';

type StepTwoProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepTwo({ changeActiveStep }: StepTwoProps) {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <MultiInput />
        <Checkbox />
        <Radio />
      </div>
      <div className={styles.btns}>
        <Button id="button-back" appearance="secondary" onClick={() => changeActiveStep(1)}>
          Назад
        </Button>
        <Button id="button-next" appearance="primary" onClick={() => changeActiveStep(3)}>
          Далее
        </Button>
      </div>
    </form>
  );
}
