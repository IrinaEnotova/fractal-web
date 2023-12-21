import * as yup from 'yup';

const stepOneSchema = yup.object().shape({
  nickname: yup
    .string()
    .required('Заполните поле')
    .matches(/^(?!.*[#№;:@.#$!%*?&^()])[a-zA-Zа-яА-Я\d]/gm, 'не может сожержать символы')
    .max(30, 'максимальная длина 30 символов'),
  firstName: yup
    .string()
    .required('Заполните поле')
    .matches(/^(?!.*[#№;:@.#$!%*?&^()\d])[a-zA-Zа-яА-Я]/gm, 'может сожержать только буквы')
    .max(50, 'максимальная длина 50 символов'),
  lastName: yup
    .string()
    .required('Заполните поле')
    .matches(/^(?!.*[#№;:@.#$!%*?&^()])[a-zA-Zа-яА-Я]/gm, 'может сожержать только буквы')
    .max(50, 'максимальная длина 50 символов'),
  gender: yup.string().required('Заполните поле'),
});

export default stepOneSchema;
