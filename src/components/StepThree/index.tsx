import { useState } from 'react';
import Button from '../UI/Button';
import styles from './StepThree.module.css';
import Textarea from '../UI/Textarea';
import ResultWindow from '../UI/ResultWindow';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import stepThreeSchema from '../../validations/stepThreeValidation';
import { useAppDispatch, useAppSelector } from '../../store/hooks/reduxHook';
import { setDescription } from '../../store/reducers/userSlice';

type StepThreeProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepThree({ changeActiveStep }: StepThreeProps) {
  const { description } = useAppSelector((state) => state.userReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepThreeSchema),
    mode: 'all',
    defaultValues: {
      about: description || '',
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    dispatch(
      setDescription({
        description: watch('about'),
      })
    );
    setIsModalOpen(true);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.inputs}>
          <Textarea register={register} errors={errors} label="О себе" id="field-about" />
          <div className={styles.symbolCount}>{`Всего символов: ${watch('about').replace(/ /gm, '').length}`}</div>
        </div>
        <div className={styles.btns}>
          <Button id="button-back" appearance="secondary" onClick={() => changeActiveStep(2)}>
            Назад
          </Button>
          <Button id="button-send" appearance="primary">
            Отправить
          </Button>
        </div>
      </form>
      {isModalOpen && <ResultWindow closeModal={closeModal} />}
    </>
  );
}
