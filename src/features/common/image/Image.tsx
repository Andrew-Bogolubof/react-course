import React, { useState } from 'react';
import notFoundImage from '../../../assets/image-not-found.png';

export interface ImageProps {
  src: string | null;
  alt?: string;
}

const Image: React.FunctionComponent<ImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const onImageLoadError = () => setImageSrc(notFoundImage);
  return (
    <img
      src={imageSrc ?? notFoundImage}
      className="img-fluid"
      alt={alt}
      onError={onImageLoadError}
    />
  );
};

export default Image;
