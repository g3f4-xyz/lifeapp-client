// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import immutabilityHelper from 'immutability-helper';
import React, { Fragment, FunctionComponent } from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../../constans';
import { NestedValueInputType } from '../../../../mutations/__generated__/updateTaskNestedFieldMutation.graphql';
import updateTaskNestedFieldMutation from '../../../../mutations/updateTaskNestedFieldMutation';
import Choice from '../../../display/field/Choice';
import Switch from '../../../display/field/Switch';
import Text from '../../../display/field/Text';
import { NestedFieldFragment } from './__generated__/NestedFieldFragment.graphql';

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
          onChange={(id: string) => {
            onOwnValueChange({ id });
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
          onChange={(enabled: boolean) => {
            onOwnValueChange({ enabled });
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
          onChange={(text: string) => {
            onOwnValueChange({ text });
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

class NestedField extends React.Component<NestedFieldProps> {
  render(): React.ReactNode {
    const { meta, value, onChange } = this.props;

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
}

interface Props {
  data: {
    id: string;
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
    const { taskId, data: { id } } = this.props;

    await updateTaskNestedFieldMutation({ fieldId: id, fieldValue: updatedFieldValue as NestedValueInputType, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  NestedFieldContainer,
  graphql`
    fragment NestedFieldFragment on FieldType {
      id
      fieldId
      meta {
        ... on NestedMetaType {
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
      }
      value {
        ... on NestedValueType {
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
      }
    }
  `,
);
