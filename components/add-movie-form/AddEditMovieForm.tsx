import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
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
import moviesList from '../../src/mocks/movies.json';
import { Movie } from '../../src/models';
import { Textarea } from '../common/forms/textarea';
import type { TextareaProps } from '../common/forms/textarea/Textarea';
import { createMovie, updateMovie } from '../../src/store/actions/movies-actions';
import { validator } from './utils';

// TODO: remove after integration with API
const genresList = Array.from(
  moviesList
    .reduce<Set<string>>((acc, movie) => {
      movie.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set())
    .values()
).slice(0, 6);

export interface AddEditMovieFormProps {
  movie?: Movie;
  isUpdate?: boolean;
}

const AddEditMovieForm: React.FunctionComponent<AddEditMovieFormProps> = ({ movie, isUpdate }) => {
  const dispatch = useDispatch();
  const formikBag = useFormik({
    initialValues: {
      title: movie?.title ?? '',
      releaseDate: movie?.release_date ?? '',
      movieUrl: movie?.poster_path ?? '',
      genres: movie?.genres ?? genresList,
      overview: movie?.overview ?? '',
      runtime: movie?.runtime ?? '',
    },
    validate: validator,
    onSubmit: ({ title, releaseDate, movieUrl, genres, overview, runtime }) => {
      const payload = {
        title,
        release_date: releaseDate,
        poster_path: movieUrl,
        overview,
        genres: Array.isArray(genres) ? genres : [genres],
        runtime: Number(runtime),
      };
      if (isUpdate && movie) {
        dispatch(updateMovie({ id: movie.id, ...payload }));
      } else {
        dispatch(createMovie(payload));
      }
    },
  });

  return (
    <form>
      <div className="modal-body pl-4 pr-4">
        {movie && (
          <div className={`${classes.container}`}>
            <div className={`pl-4 pb-1 text-uppercase ${classes.label}`}>Movie id</div>
            <div className="pl-4 text-uppercase">{movie.id}</div>
          </div>
        )}
        <>
          {WithLabel<InputProps>({
            Component: Input,
            label: 'Title',
            props: {
              htmlFor: 'title',
              placeholder: 'Title',
              value: formikBag.values.title,
              onChange: (event) => {
                formikBag.setFieldValue('title', event.target.value);
              },
            },
          })}
        </>

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
        <>
          {WithLabel<InputProps>({
            Component: Input,
            label: 'Movie URL',
            props: {
              htmlFor: 'movie-url',
              placeholder: 'Movie URL',
              value: formikBag.values.movieUrl,
              onChange: (event) => {
                formikBag.setFieldValue('movieUrl', event.target.value);
              },
            },
          })}
        </>
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
        <>
          {WithLabel<InputProps>({
            Component: Input,
            label: 'Runtime',
            props: {
              htmlFor: 'runtime',
              placeholder: 'Runtime',
              value: formikBag.values.runtime,
              onChange: (event) => {
                formikBag.setFieldValue('runtime', event.target.value);
              },
            },
          })}
        </>
      </div>
      <div
        className={`modal-footer d-flex justify-content-end align-items-center ${classes.modal_footer}`}
      >
        <Button type={ButtonType.Cancel} name="Reset" onClick={() => formikBag.resetForm()} />
        <Button
          type={ButtonType.Primary}
          name="Submit"
          {...(formikBag.isValid ? {} : { invalid: true })}
          onClick={() => formikBag.submitForm()}
        />
      </div>
    </form>
  );
};

export default AddEditMovieForm;
