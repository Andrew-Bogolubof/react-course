import * as React from 'react';
import classes from './FormLayout.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';

export interface FormLayoutProps {
  title: string;
  confirmButtonTitle: string;
  cancelButtonTitle?: string;
  onCloseForm: () => void;
}

const FormLayout: React.FunctionComponent<FormLayoutProps> = ({
  title,
  confirmButtonTitle,
  cancelButtonTitle,
  onCloseForm,
  children,
}) => (
  <div className={`modal-content ${classes.modal_content}`}>
    <div className={`modal-header pl-5 ${classes.modal_header}`}>
      <h5 className="modal-title">
        <p className="h3 text-uppercase font-weight-normal mt-2">{title}</p>
      </h5>
      <Button type={ButtonType.Close} name="Submit" onClickHandler={() => onCloseForm()} />
    </div>
    <div className="modal-body pl-5">{children}</div>
    <div className={`modal-footer ${classes.modal_footer}`}>
      {cancelButtonTitle && (
        <Button type={ButtonType.Cancel} name="Reset" onClickHandler={() => {}} />
      )}
      {confirmButtonTitle && (
        <Button type={ButtonType.Primary} name="Submit" onClickHandler={() => {}} />
      )}
    </div>
  </div>
);

export default FormLayout;
