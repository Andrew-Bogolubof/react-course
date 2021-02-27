import * as React from 'react';
import classes from './Footer.module.css';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => (
  <footer className={`container-fluid ${classes.footer}`}>
    <div className="container-xl">Container with footer</div>
  </footer>
);

export default Footer;
