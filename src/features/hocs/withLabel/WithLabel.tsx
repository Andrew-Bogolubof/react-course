import * as React from 'react';
import classes from './WithLabel.module.css';

export type WithLabelType = <TProps extends { htmlFor?: string; placeholder: string }>(arg: {
  Component: React.FunctionComponent<React.PropsWithChildren<TProps>>;
  label: string;
  props: TProps;
}) => React.ReactNode;

const WithLabel: WithLabelType = ({ Component, props, label }) => (
  <div className={classes.container}>
    <label className={`form-label pl-4 ${classes.label}`} htmlFor={props.htmlFor}>
      {label}
    </label>
    <div className={`row pl-4 pr-4 ${classes.input}`}>
      <Component {...props} />
    </div>
  </div>
);

export default WithLabel;
