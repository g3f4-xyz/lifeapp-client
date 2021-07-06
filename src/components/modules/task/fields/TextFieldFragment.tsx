import graphql from 'babel-plugin-relay/macro';
import React, { FC, useContext } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Text from '../../../display/field/Text';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TextFieldFragment_data } from './__generated__/TextFieldFragment_data.graphql';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';

interface TextFieldProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: TextFieldFragment_data;
  taskId: string;
}

const TextField: FC<TextFieldProps> = props => {
  const { data } = props;
  const {
    value: { text },
    meta,
  } = data;
  const { max, maxLength, min, minLength, required, inputType, label, helperText } = meta;
  const environment = useContext(RelayEnvironmentContext);
  const handleChange = async (text: string): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = props;

    await updateTaskFieldMutation({ fieldId, value: { text }, taskId }, { id }, environment);
  };

  return (
    <Text
      value={text}
      label={label}
      helperText={helperText}
      max={max || undefined}
      min={min || undefined}
      minLength={minLength || undefined}
      maxLength={maxLength || undefined}
      required={required}
      inputType={inputType || undefined}
      onChange={handleChange}
    />
  );
};

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment TextFieldFragmentMeta on TextFieldMeta {
    fieldType
    helperText
    label
    inputType
    min
    max
    maxLength
    minLength
    required
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment TextFieldFragmentValue on TextFieldValue {
    text
  }
`;

export default createFragmentContainer<TextFieldProps>(TextField, {
  data: graphql`
    fragment TextFieldFragment_data on Field {
      id
      fieldId
      meta {
        ...TextFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...TextFieldFragmentValue @relay(mask: false)
      }
    }
  `,
});
