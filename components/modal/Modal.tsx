import React from 'react';
import ReactDOM from 'react-dom';
import { useScrollLock } from '../../src/hooks';
import { Logo } from '../common/logo';
import { Footer } from '../footer';
import classes from './Modal.module.css';

export interface TooltipProps {}

const Tooltip: React.FunctionComponent<TooltipProps> = ({ children }) => {
  useScrollLock();

  const modal = (
    <>
      <div className={`${classes.modal}`}>
        <div className={`${classes.modal_inner}`}>
          <div className={`${classes.logo}`}>
            <Logo />
          </div>
          <div className={`modal-dialog ${classes.modal_dialog}`}>{children}</div>
          <div className={`${classes.footer}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal')!);
};

export default Tooltip;
