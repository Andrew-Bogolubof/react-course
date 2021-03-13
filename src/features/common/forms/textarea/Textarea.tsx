import * as React from 'react';
import { TextColor } from '../models';
import classes from './Textarea.module.css';

export interface TextareaProps {
  placeholder: string;
  htmlFor?: string;
  value?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  color?: TextColor;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
  color,
}) => (
  <div className="col input-group">
    <textarea
      id={htmlFor}
      placeholder={placeholder}
      className={`form-control ${classes.textarea} ${color ? classes[color] : classes.white}`}
      aria-label="Server"
      onChange={onChangeHandler}
      value={value}
    />
  </div>
);

export default Textarea;
