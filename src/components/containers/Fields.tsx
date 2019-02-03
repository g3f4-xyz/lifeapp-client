import { Paper, Theme } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Field from '../display/Field';

const styles = (theme: Theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  }
});

interface Props {
  classes?: any;
  fields: any;
}

class Fields extends React.Component<Props> {
  render() {
    const { classes, fields } = this.props;
    const fieldsGroupedByOrder = fields.reduce((acc: any, { order, ...field }: any) => {
      if (!acc[order]) {
        acc[order] = [];
      }

      acc[order].push(field);

      return acc;
    }, []);

    return fieldsGroupedByOrder.map((fieldsInRow: any, key: any) => (
      <Paper className={classes.row} key={key}>
      {fieldsInRow.map(({ format, ...props }: any) => ({ format, props })).map((props: any, key: any) => (
        <Field key={key} {...props} />
      ))}
      </Paper>
    ));
  }
}

export default withStyles(styles)(Fields);
