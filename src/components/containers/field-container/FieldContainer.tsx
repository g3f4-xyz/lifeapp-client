import { FormControl } from '@material-ui/core';
import React, { FC } from 'react';
import useFieldContainerStyles from './useFieldContainerStyles';

const FieldContainer: FC = props => {
  const classes = useFieldContainerStyles();

  return <FormControl className={classes.container}>{props.children}</FormControl>;
};

export default FieldContainer;
