import { FormControl, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import FormSelect from './form/FormSelect';
import FormSwitch from './form/FormSwitch';
import Input from './form/Input';
import MultipleChoiceWithParent from './form/MultipleChoiceWithParent';

const getComponent = (format: any): any => {
  // @ts-ignore
  return ({
    BOOL: FormSwitch,
    CHOICE: FormSelect,
    MULTIPLE_CHOICE_WITH_PARENT: MultipleChoiceWithParent,
    TEXT: Input,
  })[format];
};

const styles = (theme: Theme) => ({
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  }
});

interface Props {
  classes?: any;
  className: any;
  props: any;
  format: any;
}

class Field extends React.Component<Props> {
  render() {
    const { classes, format, props } = this.props;
    const Component = getComponent(format);

    return (
      <FormControl className={classes.container}>
        <Component {...props} />
      </FormControl>
    );
  }
}

export default withStyles(styles)(Field);
