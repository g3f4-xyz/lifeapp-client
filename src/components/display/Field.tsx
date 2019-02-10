import { FormControl, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import { FieldFormatEnum } from '../modules/Task/__generated__/TaskFragment.graphql';
import { Field as IField } from '../modules/Task/TaskFragment';
import FormSelect from './form/FormSelect';
import FormSwitch from './form/FormSwitch';
import Input from './form/Input';
import MultipleChoiceWithParent from './form/MultipleChoiceWithParent';

const getComponent = (format: FieldFormatEnum) => {
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
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  props: IField;
  format: FieldFormatEnum;
}

class Field extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, format, props } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const Component = getComponent(format);

    return (
      <FormControl className={classes.container}>
        <Component {...props} />
      </FormControl>
    );
  }
}

export default withStyles(styles)(Field);
