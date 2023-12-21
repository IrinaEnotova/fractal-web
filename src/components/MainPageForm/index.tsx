import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';
import styles from './MainPageForm.module.css';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../UI/EmailInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks/reduxHook';
import { setMainInfo } from '../../store/reducers/userSlice';
import mainPageSchema from '../../validations/mainPageValidation';
import { ValidationError } from 'yup';

export default function MainPageForm() {
  const { email } = useAppSelector((state) => state.userReducer);
  const [currentPhone, setPhone] = useState('');
  const [currentEmail, setEmail] = useState(email || '');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialErrorData = { phone: '', email: '' };
  const [errorsData, setErrorsData] = useState(initialErrorData);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = { phone: currentPhone, email: currentEmail };
    await mainPageSchema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        dispatch(setMainInfo({ phone: currentPhone, email: currentEmail }));
        navigate('/profile');
      })
      .catch((err) => {
        setErrorsData(initialErrorData);
        if (err instanceof ValidationError) {
          err.inner.forEach((e) => {
            setErrorsData((prev) => ({ ...prev, [e.path!]: [e.message] }));
          });
        }
      });
  };

  const changePhone = (value: string) => {
    setPhone(value);
  };

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  console.log(errorsData);

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.inputWrapper}>
        <PhoneInput errors={errorsData} phone={currentPhone} changePhone={changePhone} />
        <EmailInput
          errors={errorsData}
          email={currentEmail}
          changeEmail={changeEmail}
          className={styles.email}
          placeholder="webstudio.fractal@example.com"
        />
      </div>
      <Button id="button-start" appearance="primary">
        Начать
      </Button>
    </form>
  );
}
