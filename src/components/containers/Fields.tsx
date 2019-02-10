import { Paper, StyledComponentProps, Theme } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Field from '../display/Field';
import { Field as IField } from '../modules/Task/TaskFragment';

const styles = (theme: Theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  fields: IField[];
}

class Fields extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, fields } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const fieldsGroupedByOrder = fields.reduce((acc, field) => {
      const { order } = field;

      if (!acc[order]) {
        acc[order] = [];
      }

      acc[order].push(field);

      return acc;
    }, new Array<IField[]>());

    return fieldsGroupedByOrder.map((fieldsInRow, key) => (
      <Paper className={classes.row} key={key}>
      {fieldsInRow.map((field) => (
        <Field key={field.fieldId} props={field} format={field.format} />
      ))}
      </Paper>
    ));
  }
}

export default withStyles(styles)(Fields);
