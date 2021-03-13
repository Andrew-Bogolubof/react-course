import React from 'react';
import { Formik, Field, Form, FormikProps } from 'formik';
import classes from './AddEditMovieForm.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';
import { Input } from '../common/forms/input';
import { WithLabel } from '../hocs/withLabel';
import { InputProps } from '../common/forms/input/Input';
import { DateInput } from '../common/forms/date-input';
import { DateInputProps } from '../common/forms/date-input/DateInput';
import SelectInput, { SelectInputProps } from '../common/forms/select-input/SelectInput';
// TODO: remove mock movies and genres
import moviesList from '../../mocks/movies.json';
import { Movie } from '../../models';
import { Textarea } from '../common/forms/textarea';
import type { TextareaProps } from '../common/forms/textarea/Textarea';

// TODO: remove after integration with API
const genresList = Array.from(
  moviesList
    .reduce<Set<string>>((acc, movie) => {
      movie.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set())
    .values()
).slice(0, 6);

export interface AddMovieFormProps {
  movie?: Movie;
}

type FormValues = {
  title: string;
  releaseDate: string;
  movieUrl: string;
  genres: string[];
  overview: string;
  runtime: number | string;
};

const AddMovieForm: React.FunctionComponent<AddMovieFormProps> = ({ movie }) => (
  <Formik
    initialValues={{
      title: movie?.title ?? '',
      releaseDate: movie?.release_date ?? '',
      movieUrl: movie?.poster_path ?? '',
      genres: movie?.genres ?? genresList,
      overview: movie?.overview ?? '',
      runtime: movie?.runtime ?? '',
    }}
    validate={(values) => {
      const errors: Partial<FormValues> = {};

      return errors;
    }}
    onSubmit={() => {}}
  >
    {(formikBag: FormikProps<FormValues>) => (
      <Form>
        <div className="modal-body pl-4 pr-4">
          {movie && (
            <div className={`${classes.container}`}>
              <div className={`pl-4 pb-1 text-uppercase ${classes.label}`}>Movie id</div>
              <div className="pl-4 text-uppercase">{movie.id}</div>
            </div>
          )}
          <Field name="title">
            {() => (
              <>
                {WithLabel<InputProps>({
                  Component: Input,
                  label: 'Title',
                  props: {
                    htmlFor: 'title',
                    placeholder: 'Title',
                    value: formikBag.values.title,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('title', event.target.value);
                    },
                  },
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
                  props: {
                    htmlFor: 'release-date',
                    placeholder: 'Release Date',
                    value: formikBag.values.releaseDate,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('releaseDate', event.target.value);
                    },
                  },
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
                  props: {
                    htmlFor: 'movie-url',
                    placeholder: 'Movie URL',
                    value: formikBag.values.movieUrl,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('movieUrl', event.target.value);
                    },
                  },
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
                  props: {
                    htmlFor: 'genre',
                    options: genresList,
                    selectedOptions: formikBag.values.genres,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('genres', event.target.value);
                    },
                  },
                })}
              </>
            )}
          </Field>
          <Field name="overview">
            {() => (
              <>
                {WithLabel<TextareaProps>({
                  Component: Textarea,
                  label: 'Overview',
                  props: {
                    htmlFor: 'overview',
                    placeholder: 'Overview',
                    value: formikBag.values.overview,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('overview', event.target.value);
                    },
                  },
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
                  props: {
                    htmlFor: 'runtime',
                    placeholder: 'Runtime',
                    value: formikBag.values.runtime,
                    onChangeHandler: (event) => {
                      formikBag.setFieldValue('runtime', event.target.value);
                    },
                  },
                })}
              </>
            )}
          </Field>
        </div>
        <div
          className={`modal-footer d-flex justify-content-end align-items-center ${classes.modal_footer}`}
        >
          <Button
            type={ButtonType.Cancel}
            name="Reset"
            onClickHandler={() => formikBag.resetForm()}
          />
          <Button type={ButtonType.Primary} name="Submit" onClickHandler={() => {}} />
        </div>
      </Form>
    )}
  </Formik>
);

export default AddMovieForm;
