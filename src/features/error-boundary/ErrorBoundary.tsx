import * as React from 'react';

// TODO: render props for errors
export interface ErrorBoundaryProps {}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="container-fluid">Container with error caught</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
