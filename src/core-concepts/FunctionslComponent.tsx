import * as React from 'react';

export interface FunctionalComponentProps {}

const FunctionalComponent: React.FunctionComponent<FunctionalComponentProps> = () => (
  <div>Hello world from Functional Component</div>
);

export default FunctionalComponent;
