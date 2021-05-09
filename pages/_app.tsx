import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/index.css';
import { AppContext, AppProps } from 'next/app';
import { rootEpic } from '../src/store/epics';
import { createAppStore } from '../src/store';

const { withObservable } = require('next-redux-observable');

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>react-md with next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default withObservable(rootEpic)(createAppStore().withRedux(App));
