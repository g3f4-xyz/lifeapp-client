import React, { FC } from 'react';
import useLoaderStyles from './useLoaderStyles';

const Loader: FC = () => {
  const classes = useLoaderStyles();

  return <div className={classes.wrapper}>...</div>;
};

export default Loader;
