import { FormControl, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { FIELD_FORMATS } from '../../../constans';
import { FieldFragment } from './__generated__/FieldFragment.graphql';
import BoolFieldFragment from './BoolFieldFragment';
import ChoiceFieldFragment from './ChoiceFieldFragment';
import MultipleChoiceWithParentFieldFragment from './MultipleChoiceWithParentFieldFragment';
import TextFieldFragment from './TextFieldFragment';

const styles = (theme: Theme) => ({
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
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
  data: FieldFragment;
  taskId: string;
}

class Field extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <FormControl className={classes.container}>
        {this.renderField(data)}
      </FormControl>
    );
  }

  private renderField(field: FieldFragment): React.ReactNode {
    switch (field.format) {
      case FIELD_FORMATS.BOOL: {
        return (
          <BoolFieldFragment data={field} taskId={this.props.taskId} />
        );
      }
      case FIELD_FORMATS.CHOICE: {
        return (
          <ChoiceFieldFragment data={field} taskId={this.props.taskId} />
        );
      }
      case FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT: {
        return (
          <MultipleChoiceWithParentFieldFragment data={field} taskId={this.props.taskId} />
        );
      }
      case FIELD_FORMATS.TEXT: {
        return (
          <TextFieldFragment data={field} taskId={this.props.taskId} />
        );
      }
    }
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(Field),
  graphql`
    fragment FieldFragment on FieldType {
      format
      ...BoolFieldFragment
      ...ChoiceFieldFragment
      ...MultipleChoiceWithParentFieldFragment
      ...TextFieldFragment
    }
  `,
);
