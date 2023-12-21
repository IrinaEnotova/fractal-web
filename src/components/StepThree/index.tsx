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
import Loader from '../UI/Loader';

type StepThreeProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepThree({ changeActiveStep }: StepThreeProps) {
  const { phone, email, nickname, firstName, lastName, gender } = useAppSelector((state) => state.userReducer);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

    new Promise((resolve, reject) => {
      setIsLoading(true);
      const randomNumber = 100 * Math.round(Math.random());
      setTimeout(() => {
        if (randomNumber > 50) {
          setIsSuccess(true);
          resolve({ phone, email, nickname, firstName, lastName, gender, description });
          setIsModalOpen(true);
        } else {
          setIsSuccess(false);
          reject();
          setIsModalOpen(true);
        }
      }, 2000);
    }).finally(() => {
      setIsLoading(false);
    });
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
      {isLoading && <Loader />}
      {isModalOpen && <ResultWindow isSuccess={isSuccess} closeModal={closeModal} />}
    </>
  );
}
