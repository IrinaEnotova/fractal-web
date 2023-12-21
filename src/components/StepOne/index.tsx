import { FormEvent } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './StepOne.module.css';
import { useNavigate } from 'react-router-dom';
import SelectGender from '../UI/SelectGender';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import stepOneSchema from '../../validations/stepOneValidation';
import { useAppDispatch, useAppSelector } from '../../store/hooks/reduxHook';
import { setStepOneInfo } from '../../store/reducers/userSlice';
import { Genders } from '../../enums/genders';

type StepOneProps = {
  changeActiveStep: (step: number) => void;
};

export default function StepOne({ changeActiveStep }: StepOneProps) {
  const { nickname, firstName, lastName, gender } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepOneSchema),
    mode: 'all',
    defaultValues: {
      nickname: nickname || '',
      firstName: firstName || '',
      lastName: lastName || '',
      gender: gender || '',
    },
  });

  const handlePrevClick = (event: FormEvent) => {
    event.preventDefault();
    navigate('/');
  };

  const handleNextClick = () => {
    dispatch(
      setStepOneInfo({
        nickname: watch('nickname'),
        firstName: watch('firstName'),
        lastName: watch('lastName'),
        gender: watch('gender') as Genders,
      })
    );
    changeActiveStep(2);
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input
          inputName="nickname"
          register={register}
          errors={errors}
          id="field-nickname"
          label="Никнейм"
          placeholder="Placeholder"
        />
        <Input
          inputName="firstName"
          register={register}
          errors={errors}
          id="field-name"
          label="Имя"
          placeholder="Placeholder"
        />
        <Input
          inputName="lastName"
          register={register}
          errors={errors}
          id="field-username"
          label="Фамилия"
          placeholder="Placeholder"
        />
        <SelectGender register={register} errors={errors} />
      </div>
      <div className={styles.btns}>
        <Button id="button-back" appearance="secondary" onClick={handlePrevClick}>
          Назад
        </Button>
        <Button id="button-next" appearance="primary" onClick={handleSubmit(handleNextClick)}>
          Далее
        </Button>
      </div>
    </form>
  );
}
