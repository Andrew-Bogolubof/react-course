import * as React from 'react';
import classes from './Textarea.module.css';

export interface TextareaProps {
  placeholder: string;
  htmlFor?: string;
  value?: string;
  onChangeHandler: () => void;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
}) => (
  <div className="col input-group">
    <textarea
      id={htmlFor}
      className={`form-control ${classes.textarea}`}
      aria-label="Server"
      onChange={onChangeHandler}
    >
      {value ?? placeholder}
    </textarea>
  </div>
);

export default Textarea;
