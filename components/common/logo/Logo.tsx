import * as React from 'react';
import classes from './Logo.module.css';

export interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => (
  <div className={`text-left h4 ${classes.logo_text}`}>
    <b>netflix</b>roulette
  </div>
);
export default Logo;
