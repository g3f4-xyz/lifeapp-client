import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Slider from '../../../display/field/Slider';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SliderFieldFragment_data } from './__generated__/SliderFieldFragment_data.graphql';

interface Props {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SliderFieldFragment_data;
  taskId: string;
}

class SliderField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const {
      value: { progress },
      meta: { label, disabled, max, min, step },
    } = data;

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
    const {
      taskId,
      data: { fieldId, id },
    } = this.props;

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

export default createFragmentContainer<Props>(SliderField, {
  data: graphql`
    fragment SliderFieldFragment_data on SliderFieldType {
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
});
