import * as React from 'react';

export interface PureComponentProps {}

export interface PureComponentState {
  phrase: string;
}

class PureComponent extends React.PureComponent<PureComponentProps, PureComponentState> {
  constructor(props: PureComponentProps) {
    super(props);
    this.state = { phrase: 'Hello world from React.Component' };
  }

  render() {
    return <div>{this.state.phrase}</div>;
  }
}

export default PureComponent;
