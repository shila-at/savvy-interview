
import * as yup from 'yup';

export const listFormSchema = yup.object({
  title: yup
    .string()
    .required('لطفاً عنوان را وارد کنید.'),
  subtitle: yup
    .string()
    .required('لطفاً زیرعنوان را وارد کنید.'), 
}).required();
