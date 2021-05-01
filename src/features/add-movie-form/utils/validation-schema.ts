import Joi from 'joi';
import { FormValues } from '../models';

export const schema = Joi.object<FormValues>()
  .keys({
    title: Joi.string().not('').required(),
    releaseDate: Joi.string().isoDate(),
    movieUrl: Joi.string().uri().required(),
    genres: Joi.string().not('').required(),
    overview: Joi.string().not('').required(),
    runtime: Joi.string()
      .custom((value, helper) => {
        if (Number(value) < 0) {
          return helper.message({ custom: 'runtime should be greater than 0' });
        }
        return value;
      })
      .required(),
  })
  .prefs({ convert: false, abortEarly: false });
