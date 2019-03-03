// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../../constans';
import { FieldFragment } from './__generated__/FieldFragment.graphql';
import ChoiceFieldFragment from './ChoiceFieldFragment';
import PartialChoiceFieldFragment from './NestedChoiceFieldFragment';
import SwitchFieldFragment from './SwitchFieldFragment';
import TextFieldFragment from './TextFieldFragment';

interface Props {
  data: FieldFragment;
  taskId: string;
}

const Field = (props: Props) => ({
  [FIELD_TYPE.CHOICE]: (
    <ChoiceFieldFragment {...props} />
  ),
  [FIELD_TYPE.SWITCH]: (
    <SwitchFieldFragment {...props} />
  ),
  [FIELD_TYPE.TEXT]: (
    <TextFieldFragment {...props} />
  ),
  [FIELD_TYPE.NESTED_CHOICE]: (
    <PartialChoiceFieldFragment {...props} />
  ),
}[props.data.fieldType]);

export default createFragmentContainer<Props>(
  // @ts-ignore
  Field,
  graphql`
    fragment FieldFragment on FieldType {
      fieldType
      ...SwitchFieldFragment
      ...ChoiceFieldFragment
      ...TextFieldFragment
      ...NestedChoiceFieldFragment
    }
  `,
);
