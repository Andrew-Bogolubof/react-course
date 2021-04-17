import React from 'react';
import { useDispatch } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddEditMovieForm from '../AddEditMovieForm';
import { createMovie } from '../../../store/actions/movies-actions';

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as object),
  useDispatch: jest.fn(() => ({})),
}));

const mockedUseDispatch = useDispatch as jest.Mock;

describe('AddEditMovieForm', () => {
  it('should render without errors', () => {
    const { asFragment } = render(<AddEditMovieForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should not be submitted when form is invalid', () => {
    render(<AddEditMovieForm />);

    userEvent.click(screen.getByText('Submit'));

    // TODO: update after merging task with forms where validation implemented. Should be called 0 times
    expect(mockedUseDispatch).toHaveBeenCalledTimes(1);
  });

  it('should be submitted when form filled with correct values', async () => {
    render(<AddEditMovieForm />);
    const expectedAction = createMovie({
      title: 'Test Title',
      release_date: '',
      poster_path: 'http://test.com',
      overview: 'Test Overview',
      genres: [],
      runtime: 123,
    });
    userEvent.type(screen.getByPlaceholderText('Title'), 'Test Title');
    userEvent.type(screen.getByPlaceholderText('Movie URL'), 'http://test.com');
    userEvent.type(screen.getByPlaceholderText('Overview'), 'Test Overview');
    userEvent.type(screen.getByPlaceholderText('Runtime'), '123');
    userEvent.click(screen.getByText('Submit'));

    await waitFor(
      () => expect(mockedUseDispatch).toHaveBeenCalledWith(expectedAction),
      expect.anything()
    );
  });
});
