// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskChoiceFieldMutation from '../../../mutations/updateTaskChoiceFieldMutation';
import Choice from '../../display/Choice';
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

  private handleChange = async (id: string): Promise<void> => {
    const { taskId, data: { id: fieldId }} = this.props;

    await updateTaskChoiceFieldMutation({ fieldId, fieldValue: { id }, taskId });
  };
}

const ChoiceFieldFragmentMeta = graphql`
  fragment ChoiceFieldFragmentMeta on ChoiceMetaType {
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
        ... on ChoiceValueType {
          id
        }
      }
    }
  `,
);
