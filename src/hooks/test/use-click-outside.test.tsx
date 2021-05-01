import React, { useRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useClickOutside } from '../use-click-outside';

const TestComponent = ({ callback }: { callback: () => void }) => {
  const ref = useRef(null);
  useClickOutside(ref, callback);
  return (
    <>
      <div ref={ref}>Test</div>
      <div>Click</div>
    </>
  );
};

describe('Hooks - useClickOutside', () => {
  it('should call callback when click outside', () => {
    const mockFunction = jest.fn();
    render(<TestComponent callback={mockFunction} />);
    fireEvent.mouseDown(screen.getByText('Click'));

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
