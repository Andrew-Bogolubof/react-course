import * as React from 'react';

export interface CreateElementProps {}

const CreateElement: React.FunctionComponent<CreateElementProps> = () =>
  React.createElement('div', null, 'Hello world from React.CreateElement');

export default CreateElement;
