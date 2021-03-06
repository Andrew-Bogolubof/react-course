import * as React from 'react';
import classes from './Footer.module.css';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => (
  <footer className={`container-fluid d-flex align-items-center ${classes.footer}`}>
    <div className={`container-xl ${classes.vertical_center}`}>
      <div className={`text-center h4 m-0 p-3 ${classes.footer_text}`}>
        <b>netflix</b>roulette
      </div>
    </div>
  </footer>
);

export default Footer;
