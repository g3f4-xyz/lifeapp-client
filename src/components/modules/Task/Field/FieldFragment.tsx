// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer, RelayContainer } from 'react-relay';
import { FIELD_TYPE_VALUE_MAP } from '../../../../constans';
import { FieldFragment } from './__generated__/FieldFragment.graphql';
import ChoiceFieldFragment from './ChoiceFieldFragment';
import NestedFieldFragment from './NestedFieldFragment';
import SliderFieldFragment from './SliderFieldFragment';
import SwitchFieldFragment from './SwitchFieldFragment';
import TextFieldFragment from './TextFieldFragment';

interface Props {
  data: FieldFragment;
  taskId: string;
}

const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<RelayContainer<Props & any>> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

const Field = (props: Props): React.ReactNode => {
  const Component = FIELD_COMPONENTS_MAP[props.data.fieldType];

  return <Component {...props} />;
};

export default createFragmentContainer<Props>(
  // @ts-ignore
  Field,
  graphql`
    fragment FieldFragment on FieldType {
      fieldType
      ...SliderFieldFragment
      ...SwitchFieldFragment
      ...ChoiceFieldFragment
      ...TextFieldFragment
      ...NestedFieldFragment
    }
  `,
);
