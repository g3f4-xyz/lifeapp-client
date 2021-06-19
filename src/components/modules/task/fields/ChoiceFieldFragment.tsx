import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Choice from '../../../display/field/Choice';
// eslint-disable-next-line @typescript-eslint/camelcase
import { ChoiceFieldFragment_data } from './__generated__/ChoiceFieldFragment_data.graphql';

interface ChoiceFieldProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: ChoiceFieldFragment_data;
  taskId: string;
}

const ChoiceField: FC<ChoiceFieldProps> = props => {
  const { data } = props;
  const {
    value: { id },
    meta: { options, label, helperText },
  } = data;
  const handleChange = async (changedId: string): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = props;

    await updateTaskFieldMutation({ fieldId, value: { id: changedId }, taskId }, { id });
  };

  return (
    <Choice
      label={label}
      value={id || ''}
      helperText={helperText}
      options={options}
      onChange={handleChange}
    />
  );
};

graphql`
  fragment ChoiceFieldFragmentMeta on ChoiceFieldMeta {
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

graphql`
  fragment ChoiceFieldFragmentValue on ChoiceFieldValue {
    id
  }
`;

export default createFragmentContainer<ChoiceFieldProps>(ChoiceField, {
  data: graphql`
    fragment ChoiceFieldFragment_data on Field {
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
});
