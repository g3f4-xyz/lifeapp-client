import React from 'react';
import useLoaderStyles from './useLoaderStyles';

export default function Loader() {
  const classes = useLoaderStyles();

  return <div className={classes.wrapper}>...</div>;
}
