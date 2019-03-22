// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Slider from '../../../display/field/Slider';
import { SliderFieldFragment } from './__generated__/SliderFieldFragment.graphql';

interface Props {
  data: SliderFieldFragment;
  taskId: string;
}

class SliderField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { value: { progress }, meta: { label, disabled, max, min, step } } = data;

    return (
      <Slider
        disabled={disabled || undefined}
        value={progress}
        label={label}
        max={max || undefined}
        min={min || undefined}
        step={step || undefined}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = async (progress: number): Promise<void> => {
    const { taskId, data: { fieldId, id }} = this.props;

    await updateTaskFieldMutation({ fieldId, value: { progress }, taskId }, { id });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment SliderFieldFragmentMeta on SliderMetaType {
    fieldType
    label
    disabled
    required
    max
    min
    step
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment SliderFieldFragmentValue on SliderValueType {
    progress
  }
`;

export default createFragmentContainer<Props>(
  // @ts-ignore
  SliderField,
  graphql`
    fragment SliderFieldFragment on FieldType {
      id
      fieldId
      meta {
        ...SliderFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...SliderFieldFragmentValue @relay(mask: false)
      }
    }
  `,
);
