import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import React from 'react';

function Loader(props: CircularProgressProps) {
  return (
      <CircularProgress size={'100%'} thickness={3} {...props} />
  );
}

export default Loader;
