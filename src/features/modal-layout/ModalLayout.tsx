import * as React from 'react';
import classes from './ModalLayout.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';

export interface ModalLayoutProps {
  title: string;
  onCloseForm: () => void;
}

const ModalLayout: React.FunctionComponent<ModalLayoutProps> = ({
  title,
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
    {children}
  </div>
);

export default ModalLayout;
