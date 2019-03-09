// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskChoiceFieldMutation from '../../../../mutations/updateTaskChoiceFieldMutation';
import Choice from '../../../display/field/Choice';
import { ChoiceFieldFragment } from './__generated__/ChoiceFieldFragment.graphql';

interface Props {
  data: ChoiceFieldFragment;
  taskId: string;
}

class ChoiceField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { value: { id }, meta: { options, label, helperText } } = data;

    return (
      <Choice
        label={label}
        value={id || ''}
        helperText={helperText}
        options={options}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = async (changedId: string): Promise<void> => {
    const { taskId, data: { fieldId, id }} = this.props;

    await updateTaskChoiceFieldMutation({ fieldId, fieldValue: { id: changedId }, taskId }, { id });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment ChoiceFieldFragmentMeta on ChoiceMetaType {
    fieldType
    helperText
    label
    defaultValue
    options {
      text
      value
    }
    required
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment ChoiceFieldFragmentValue on ChoiceValueType {
    id
  }
`;

export default createFragmentContainer<Props>(
  // @ts-ignore
  ChoiceField,
  graphql`
    fragment ChoiceFieldFragment on FieldType {
      id
      fieldId
      meta {
        ...ChoiceFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...ChoiceFieldFragmentValue @relay(mask: false)
      }
    }
  `,
);
