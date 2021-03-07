import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import classes from './AddMovieForm.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { WithLabel } from '../hocs/withLabel';
import { InputProps } from '../common/input/Input';

export interface AddMovieFormProps {}

type FormValues = {
  name: string;
  price: string;
  manufacturer: string;
  inStock: string;
  description: string;
  shortDescription: string;
  category: string;
};

const AddMovieForm: React.FunctionComponent<AddMovieFormProps> = () => (
  <Formik
    initialValues={{
      name: '',
      price: '',
      manufacturer: '',
      inStock: '',
      description: '',
      shortDescription: '',
      category: '',
    }}
    validate={(values) => {
      const errors: Partial<FormValues> = {};
      if (!values.name) {
        errors.name = 'Name is Required';
      }
      if (!values.price) {
        errors.price = 'Price is Required';
      }
      if (!values.inStock) {
        errors.inStock = 'In Stock is Required';
      }
      if (!values.manufacturer) {
        errors.manufacturer = 'Manufacturer is Required';
      }
      if (!values.description) {
        errors.description = 'Description is Required';
      }
      if (!values.shortDescription) {
        errors.shortDescription = 'Short Description is Required';
      }
      if (!values.category) {
        errors.category = 'Category is Required';
      }

      return errors;
    }}
    onSubmit={() => {}}
  >
    {(formikBag: FormikProps<FormValues>) => (
      <>
        <div className="modal-body pl-4 pr-4">
          {WithLabel<InputProps>({
            Component: Input,
            label: 'Title',
            props: { htmlFor: 'title', placeholder: 'Title' },
          })}
        </div>
        <div
          className={`modal-footer d-flex justify-content-end align-items-center ${classes.modal_footer}`}
        >
          <Button type={ButtonType.Cancel} name="Reset" onClickHandler={() => {}} />
          <Button type={ButtonType.Primary} name="Submit" onClickHandler={() => {}} />
        </div>
      </>
    )}
  </Formik>
);

export default AddMovieForm;
