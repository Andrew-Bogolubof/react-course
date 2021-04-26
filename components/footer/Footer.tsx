import * as React from 'react';
import { Logo } from '../common/logo';
import classes from './Footer.module.css';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => (
  <footer
    className={`container-fluid d-flex justify-content-center align-items-center ${classes.footer}`}
  >
    <Logo />
  </footer>
);

export default Footer;
