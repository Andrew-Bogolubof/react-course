import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import classes from './AddMovieForm.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { WithLabel } from '../hocs/withLabel';
import { InputProps } from '../common/input/Input';
import { DateInput } from '../common/date-input';
import { DateInputProps } from '../common/date-input/DateInput';
import SelectInput, { SelectInputProps } from '../common/select-input/SelectInput';
// TODO: remove mock movies and genres
import moviesList from '../../mocks/movies.json';

const genres = Array.from(
  moviesList
    .reduce<Set<string>>((acc, movie) => {
      movie.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set())
    .values()
).slice(0, 6);

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
          <Field name="title">
            {() => (
              <>
                {WithLabel<InputProps>({
                  Component: Input,
                  label: 'Title',
                  props: { htmlFor: 'title', placeholder: 'Title' },
                })}
              </>
            )}
          </Field>
          <Field name="release-date">
            {() => (
              <>
                {WithLabel<DateInputProps>({
                  Component: DateInput,
                  label: 'Release Date',
                  props: { htmlFor: 'release-date', placeholder: 'Release Date' },
                })}
              </>
            )}
          </Field>
          <Field name="movie-url">
            {() => (
              <>
                {WithLabel<InputProps>({
                  Component: Input,
                  label: 'Movie URL',
                  props: { htmlFor: 'movie-url', placeholder: 'Movie URL' },
                })}
              </>
            )}
          </Field>
          <Field name="genre">
            {() => (
              <>
                {WithLabel<SelectInputProps>({
                  Component: SelectInput,
                  label: 'Genre',
                  props: { htmlFor: 'genre', placeholder: 'Genre', options: genres },
                })}
              </>
            )}
          </Field>
          <Field name="overview">
            {() => (
              <>
                {WithLabel<InputProps>({
                  Component: Input,
                  label: 'Overview',
                  props: { htmlFor: 'overview', placeholder: 'Overview' },
                })}
              </>
            )}
          </Field>
          <Field name="runtime">
            {() => (
              <>
                {WithLabel<InputProps>({
                  Component: Input,
                  label: 'Runtime',
                  props: { htmlFor: 'runtime', placeholder: 'Runtime' },
                })}
              </>
            )}
          </Field>
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
