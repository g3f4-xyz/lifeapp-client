import { FormControl, FormControlLabel, StyledComponentProps, Switch, Theme, withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskSwitchFieldMutation from '../../../../mutations/updateTaskSwitchFieldMutation';
import { SwitchFieldFragment } from './__generated__/SwitchFieldFragment.graphql';

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
  data: SwitchFieldFragment;
  taskId: string;
}

class SwitchField extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fieldId, value: { enabled }, meta: { label } } = data;

    return (
      <FormControl className={classes.container}>
        <FormControlLabel
          id={fieldId}
          control={
            <Switch
              checked={enabled as boolean}
              value={fieldId}
              onChange={this.handleChange}
            />
          }
          label={label}
        />
      </FormControl>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>, enabled: boolean): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskSwitchFieldMutation({ fieldId: id, fieldValue: { enabled }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(SwitchField),
  graphql`
    fragment SwitchFieldFragment on FieldType {
      id
      fieldId
      meta {
        ... on SwitchMetaType {
          label
          required
        }
      }
      value {
        ... on SwitchValueType {
          enabled
        }
      }
    }
  `,
);
