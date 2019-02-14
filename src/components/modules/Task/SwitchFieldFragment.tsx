import { FormControlLabel, Switch } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import updateTaskSwitchFieldMutation from '../../../mutations/updateTaskSwitchFieldMutation';
import { SwitchFieldFragment } from './__generated__/SwitchFieldFragment.graphql';

interface Props {
  data: SwitchFieldFragment;
  taskId: string;
}

class SwitchField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { fieldId, label, value: { enabled } } = data;

    return (
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
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>, enabled: boolean): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskSwitchFieldMutation({ fieldId: id, fieldValue: { enabled }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  SwitchField,
  graphql`
    fragment SwitchFieldFragment on FieldType {
      id
      fieldId
      helperText
      label
      meta {
        ... on SwitchMetaType {
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
