import { FormEvent, useState } from 'react';
import Button from '../UI/Button';
import styles from './StepThree.module.css';
import Textarea from '../UI/Textarea';
import ResultWindow from '../UI/ResultWindow';

type StepThreeProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepThree({ changeActiveStep }: StepThreeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Textarea label="О себе" id="field-about" />
        </div>
        <div className={styles.btns}>
          <Button id="button-back" appearance="secondary" onClick={() => changeActiveStep(2)}>
            Назад
          </Button>
          <Button id="button-send" appearance="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </div>
      </form>
      {isModalOpen && <ResultWindow closeModal={closeModal} />}
    </>
  );
}
