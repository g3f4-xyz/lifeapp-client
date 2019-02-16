import { FormControl, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../constans';
import { FieldFragment } from './__generated__/FieldFragment.graphql';
import ChoiceFieldFragment from './ChoiceFieldFragment';
import PartialChoiceFieldFragment from './PartialChoiceFieldFragment';
import SwitchFieldFragment from './SwitchFieldFragment';
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

    return {
      [FIELD_TYPE.CHOICE]: () => (
        <ChoiceFieldFragment data={data} taskId={this.props.taskId} />
      ),
      [FIELD_TYPE.SWITCH]: () => (
        <SwitchFieldFragment data={data} taskId={this.props.taskId} />
      ),
      [FIELD_TYPE.TEXT]: () => (
        <TextFieldFragment data={data} taskId={this.props.taskId} />
      ),
      [FIELD_TYPE.PARTIAL_CHOICE]: () => (
        <PartialChoiceFieldFragment data={data} taskId={this.props.taskId} />
      ),
    }[data.type]();
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(Field),
  graphql`
    fragment FieldFragment on FieldType {
      type
      ...SwitchFieldFragment
      ...ChoiceFieldFragment
      ...TextFieldFragment
      ...PartialChoiceFieldFragment
    }
  `,
);
