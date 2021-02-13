import * as React from 'react';

export interface ComponentProps {}

export interface ComponentState {
  phrase: string;
}

class Component extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { phrase: 'Hello world from React.Component' };
  }

  render() {
    return <div>{this.state.phrase}</div>;
  }
}

export default Component;
