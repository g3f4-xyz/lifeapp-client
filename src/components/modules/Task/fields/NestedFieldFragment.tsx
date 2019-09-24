// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import immutabilityHelper from 'immutability-helper';
import React, { Fragment, FunctionComponent } from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../../constans';
import { NestedValueInputType } from '../../../../mutations/__generated__/updateTaskFieldMutation.graphql';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Choice from '../../../display/field/Choice';
import Switch from '../../../display/field/Switch';
import Text from '../../../display/field/Text';
import { FieldIdEnum, NestedFieldFragment } from './__generated__/NestedFieldFragment.graphql';

interface OwnFieldProps {
  ownMeta: NestedFieldFragment['meta']['ownMeta'];
  ownValue: NestedFieldFragment['value']['ownValue'];

  onOwnValueChange(updatedValue: NestedFieldFragment['value']['ownValue']): void;
}

const OwnField: FunctionComponent<OwnFieldProps> = ({ ownMeta, ownValue, onOwnValueChange }) => {
  if (ownMeta && ownValue) {
    if (ownMeta.fieldType === FIELD_TYPE.CHOICE) {
      const { label, helperText, options } = ownMeta;
      const { id } = ownValue;

      return (
        <Choice
          label={label}
          value={id || ''}
          helperText={helperText}
          options={options}
          onChange={(value: string) => {
            onOwnValueChange({ id: value });
          }}
        />
      );
    }
    if (ownMeta.fieldType === FIELD_TYPE.SWITCH) {
      const { disabled, label, required } = ownMeta;
      const { enabled } = ownValue;

      return (
        <Switch
          checked={enabled}
          disabled={disabled}
          label={label}
          required={required}
          onChange={(value: boolean) => {
            onOwnValueChange({ enabled: value });
          }}
        />
      );
    }
    if (ownMeta.fieldType === FIELD_TYPE.TEXT) {
      const { label, required } = ownMeta;
      const { text } = ownValue;

      return (
        <Text
          value={text || ''}
          label={label}
          required={required}
          onChange={(value: string) => {
            onOwnValueChange({ text: value });
          }}
        />
      );
    }
  }

  return null;
};

interface NestedFieldProps {
  meta?: {
    fieldType?: string;
    parentValue?: NestedFieldFragment['value']['ownValue'];
    ownMeta: NestedFieldFragment['meta']['ownMeta'];
    childrenMeta: Array<NestedFieldProps['meta']>;
  };
  value?: {
    ownValue?: NestedFieldFragment['value']['ownValue'];
    childrenValue?: NestedFieldProps['value'];
  };

  onChange(value: NestedFieldProps['value']): void;
}

function NestedField(props: NestedFieldProps): JSX.Element | null {
  const { meta, value, onChange } = props;

  if (meta && meta.ownMeta && value) {
    const activeChildrenMeta = value.ownValue && meta.childrenMeta && meta.childrenMeta.find((childrenMeta) => {
      if (!meta || !meta.ownMeta || !childrenMeta || !childrenMeta.parentValue || !value || !value.ownValue) {
        return false;
      }

      if (meta.ownMeta.fieldType === FIELD_TYPE.CHOICE) {
        return childrenMeta.parentValue.id === value.ownValue.id;
      } else if (meta.ownMeta.fieldType === FIELD_TYPE.TEXT) {
        return childrenMeta.parentValue.text === value.ownValue.text;
      } else if (meta.ownMeta.fieldType === FIELD_TYPE.SWITCH) {
        return childrenMeta.parentValue.enabled === value.ownValue.enabled;
      }

      return false;
    });
    const updateOwnValue = (ownValue: NestedFieldFragment['value']['ownValue']) => {
      const updatedValue = immutabilityHelper(value, {
        ownValue: {
          $set: ownValue,
        },
      });

      onChange(updatedValue);
    };
    const updateChildrenValue = (childrenValue: NestedFieldProps['value']) => {
      const updatedValue = immutabilityHelper(value, {
        childrenValue: {
          $set: childrenValue,
        },
      });

      onChange(updatedValue);
    };

    return (
      <Fragment>
        <OwnField ownMeta={meta.ownMeta} ownValue={value.ownValue || {}} onOwnValueChange={updateOwnValue} />
        {activeChildrenMeta && (
          <NestedField value={value.childrenValue || {}} meta={activeChildrenMeta} onChange={updateChildrenValue} />
        )}
      </Fragment>
    );
  }

  return null;
}

interface Props {
  data: {
    id: string;
    fieldId: FieldIdEnum;
    meta: NestedFieldProps['meta'];
    value: NestedFieldProps['value'];
  };
  taskId: string;
}

class NestedFieldContainer extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { meta, value } = data;

    return (
      <NestedField value={value} meta={meta} onChange={this.handleChange} />
    );
  }

  private handleChange = async (updatedFieldValue: NestedFieldProps['value']): Promise<void> => {
    const { taskId, data: { fieldId, id } } = this.props;

    await updateTaskFieldMutation({ fieldId, value: updatedFieldValue as NestedValueInputType, taskId }, { id });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment NestedFieldFragmentMeta on NestedMetaType {
    fieldType
    parentValue {
      ...SwitchFieldFragmentValue @relay(mask: false)
      ...TextFieldFragmentValue @relay(mask: false)
      ...ChoiceFieldFragmentValue @relay(mask: false)
    }
    ownMeta {
      ...ChoiceFieldFragmentMeta @relay(mask: false)
      ...TextFieldFragmentMeta @relay(mask: false)
      ...SwitchFieldFragmentMeta @relay(mask: false)
    }
    childrenMeta {
      fieldType
      parentValue {
        ...SwitchFieldFragmentValue @relay(mask: false)
        ...TextFieldFragmentValue @relay(mask: false)
        ...ChoiceFieldFragmentValue @relay(mask: false)
      }
      ownMeta {
        ...ChoiceFieldFragmentMeta @relay(mask: false)
        ...TextFieldFragmentMeta @relay(mask: false)
        ...SwitchFieldFragmentMeta @relay(mask: false)
        ... on NestedMetaType {
          parentValue {
            ...SwitchFieldFragmentValue @relay(mask: false)
            ...TextFieldFragmentValue @relay(mask: false)
            ...ChoiceFieldFragmentValue @relay(mask: false)
          }
          ownMeta {
            ...ChoiceFieldFragmentMeta @relay(mask: false)
            ...TextFieldFragmentMeta @relay(mask: false)
            ...SwitchFieldFragmentMeta @relay(mask: false)
          }
          childrenMeta {
            fieldType
            parentValue {
              ...SwitchFieldFragmentValue @relay(mask: false)
              ...TextFieldFragmentValue @relay(mask: false)
              ...ChoiceFieldFragmentValue @relay(mask: false)
            }
            ownMeta {
              ...ChoiceFieldFragmentMeta @relay(mask: false)
              ...TextFieldFragmentMeta @relay(mask: false)
              ...SwitchFieldFragmentMeta @relay(mask: false)
            }
          }
        }
      }
      childrenMeta {
        fieldType
        parentValue {
          ...SwitchFieldFragmentValue @relay(mask: false)
          ...TextFieldFragmentValue @relay(mask: false)
          ...ChoiceFieldFragmentValue @relay(mask: false)
        }
        ownMeta {
          ...ChoiceFieldFragmentMeta @relay(mask: false)
          ...TextFieldFragmentMeta @relay(mask: false)
          ...SwitchFieldFragmentMeta @relay(mask: false)
          ... on NestedMetaType {
            parentValue {
              ...SwitchFieldFragmentValue @relay(mask: false)
              ...TextFieldFragmentValue @relay(mask: false)
              ...ChoiceFieldFragmentValue @relay(mask: false)
            }
            ownMeta {
              ...ChoiceFieldFragmentMeta @relay(mask: false)
              ...TextFieldFragmentMeta @relay(mask: false)
              ...SwitchFieldFragmentMeta @relay(mask: false)
            }
            childrenMeta {
              fieldType
              parentValue {
                ...SwitchFieldFragmentValue @relay(mask: false)
                ...TextFieldFragmentValue @relay(mask: false)
                ...ChoiceFieldFragmentValue @relay(mask: false)
              }
              ownMeta {
                ...ChoiceFieldFragmentMeta @relay(mask: false)
                ...TextFieldFragmentMeta @relay(mask: false)
                ...SwitchFieldFragmentMeta @relay(mask: false)
              }
            }
          }
        }
      }
    }
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment NestedFieldFragmentValue on NestedValueType {
    ownValue {
      ...SwitchFieldFragmentValue @relay(mask: false)
      ...TextFieldFragmentValue @relay(mask: false)
      ...ChoiceFieldFragmentValue @relay(mask: false)
    }
    childrenValue {
      ownValue {
        ...SwitchFieldFragmentValue @relay(mask: false)
        ...TextFieldFragmentValue @relay(mask: false)
        ...ChoiceFieldFragmentValue @relay(mask: false)
      }
      childrenValue {
        ownValue {
          ...SwitchFieldFragmentValue @relay(mask: false)
          ...TextFieldFragmentValue @relay(mask: false)
          ...ChoiceFieldFragmentValue @relay(mask: false)
        }
      }
    }
  }
`;

export default createFragmentContainer<Props>(
  // @ts-ignore
  NestedFieldContainer,
  graphql`
    fragment NestedFieldFragment on NestedFieldType {
      id
      fieldId
      meta {
        ...NestedFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...NestedFieldFragmentValue @relay(mask: false)
      }
    }
  `,
);
