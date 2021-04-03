import { FormikErrors } from 'formik';
import { FormValues } from '../models';
import { schema } from './validation-schema';

export const validator = (values: FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};
  const result = schema.validate(values);

  if (result.error) {
    result.error.details.reduce((acc, error) => {
      acc[`${error.path.join('.')}` as keyof FormValues] = error.message;
      return acc;
    }, errors);
  }

  return errors;
};
