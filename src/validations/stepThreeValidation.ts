import * as yup from 'yup';

const stepThreeSchema = yup.object().shape({
  about: yup.string().required('Заполните поле').max(200, 'максимальная длина 200 символов'),
});

export default stepThreeSchema;
