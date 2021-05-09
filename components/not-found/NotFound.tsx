import * as React from 'react';
import { useRouter } from 'next/router';
import classes from './NotFound.module.css';
import { Logo } from '../common/logo';
import { Image } from '../common/image';
import image from '../../assets/not-found.png';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';

const NotFound: React.FC = () => {
  const router = useRouter();
  const navigateHome = () => {
    router.push('/');
  };
  return (
    <section className={`container-fluid h-100 ${classes.header}`}>
      <div className="container-xxl h-100">
        <div className={`container-xxl row d-flex align-items-center pl-3 pt-3 ${classes.header}`}>
          <div className="col">
            <Logo />
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center h-75">
          <p className="display-3 mb-3">Page Not Found</p>
          <div className={`mb-5 pb-5 ${classes.image}`}>
            <Image src={image} />
          </div>
          <Button name="Go Back Home" type={ButtonType.Cancel} onClick={navigateHome} />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
