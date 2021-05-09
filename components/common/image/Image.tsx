import React, { useEffect, useState } from 'react';
import notFoundImage from '../../../assets/image-not-found.png';

export interface ImageProps {
  src: string | null;
  alt?: string;
}

const Image: React.FunctionComponent<ImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const onImageLoadError = () => setImageSrc('../../../src/assets/image-not-found.png');
  return (
    <img
      src={imageSrc ?? '../../../src/assets/image-not-found.png'}
      className="img-fluid"
      alt={alt}
      onError={onImageLoadError}
    />
  );
};

export default Image;
