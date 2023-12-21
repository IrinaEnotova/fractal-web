import * as yup from 'yup';

const mainPageSchema = yup.object().shape({
  email: yup
    .string()
    .required('Заполните поле')
    .email('почта должна быть формата example@email.com')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'почта должна быть формата example@email.com'),
  phone: yup.string().test('is-full-number', 'Введите номер из 11 цифр', (value: string | undefined) => {
    return value?.length === 11;
  }),
});

export default mainPageSchema;
