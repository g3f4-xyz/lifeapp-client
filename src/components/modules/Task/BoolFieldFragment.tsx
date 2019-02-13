import { FormControlLabel, Switch } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import updateTaskBoolFieldMutation from '../../../mutations/updateTaskBoolFieldMutation';
import { BoolFieldFragment } from './__generated__/BoolFieldFragment.graphql';

interface Props {
  data: BoolFieldFragment;
  taskId: string;
}

class BoolField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { fieldId, label, value: { bool } } = data;

    return (
      <FormControlLabel
        id={fieldId}
        control={
          <Switch
            checked={bool as boolean}
            value={fieldId}
            onChange={this.handleChange}
          />
        }
        label={label}
      />
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>, bool: boolean): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskBoolFieldMutation({ fieldId: id, fieldValue: { bool }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  BoolField,
  graphql`
    fragment BoolFieldFragment on FieldType {
      id
      fieldId
      helperText
      label
      format
      meta {
        ... on BoolMetaType {
          required
        }
      }
      value {
        ... on BoolValueType {
          bool
        }
      }
    }
  `,
);
