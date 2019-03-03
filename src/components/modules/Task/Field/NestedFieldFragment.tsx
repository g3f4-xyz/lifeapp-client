// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import immutabilityHelper from 'immutability-helper';
import React, { Fragment } from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../../constans';
import updateTaskNestedFieldMutation from '../../../../mutations/updateTaskNestedFieldMutation';
import Choice from '../../../display/field/Choice';
import Switch from '../../../display/field/Switch';
import Text from '../../../display/field/Text';
import { NestedFieldFragment } from './__generated__/NestedFieldFragment.graphql';

interface NestedFieldProps {
  value: any;
  meta: any;

  onChange(value: any): void;
}

class NestedField extends React.Component<NestedFieldProps> {
  render(): React.ReactNode {
    const { meta, value, onChange } = this.props;
    console.log(['NestedField'], { meta, value, onChange });
    const { fieldType } = meta;
    console.log(['NestedField{ fieldType }'], { fieldType });

    if (fieldType === FIELD_TYPE.CHOICE) {
      const { options } = meta;
      const { id } = value;
      const update = (id: string) => {
        console.log(['Choice.onChange.id'], id);
        const updatedFieldValue = immutabilityHelper(value, {
          $set: { id },
        });
        console.log(['Choice.onChange.updatedFieldValue'], updatedFieldValue);
        onChange(updatedFieldValue);
      };

      return (
        <Choice
          value={id}
          options={options}
          onChange={update}
        />
      );
    }
    if (fieldType === FIELD_TYPE.SWITCH) {
      const { label, required } = meta;
      const { enabled } = value;
      const update = (enabled: boolean) => {
        console.log(['Switch.onChange.enabled'], enabled);
        const updatedFieldValue = immutabilityHelper(value, {
          $set: { enabled },
        });
        console.log(['Switch.onChange.updatedFieldValue'], updatedFieldValue);
        onChange(updatedFieldValue);
      };

      return (
        <Switch
          checked={enabled}
          label={label}
          required={required}
          onChange={update}
        />
      );
    }
    if (fieldType === FIELD_TYPE.TEXT) {
      const { label, required } = meta;
      const { text } = value;
      const update = (text: string) => {
        const updatedFieldValue = immutabilityHelper(value || {}, {
          $set: { text },
        });

        onChange(updatedFieldValue);
      };

      return (
        <Text
          value={text}
          label={label}
          required={required}
          onChange={update}
        />
      );
    }
    if (fieldType === FIELD_TYPE.NESTED) {
      const { fieldType, ownMeta, childrenMeta } = meta;
      console.log(['fieldType === FIELD_TYPE.NESTED{ fieldType, ownMeta, childrenMeta }'], {
        fieldType,
        ownMeta,
        childrenMeta,
      });
      const { ownValue, childrenValue } = value;
      console.log(['fieldType === FIELD_TYPE.NESTED{ ownValue, childrenValue }'], { ownValue, childrenValue });
      const nestedChildrenMeta = ownValue && childrenMeta && childrenMeta.find((meta: any) => {
        console.log(['childrenMeta.find((meta: any)'], meta);
        if (ownMeta.fieldType === FIELD_TYPE.CHOICE) {
          return meta.parentValue.id === ownValue.id;
        } else if (ownMeta.fieldType === FIELD_TYPE.TEXT) {
          return meta.parentValue.text === ownValue.text;
        } else if (ownMeta.fieldType === FIELD_TYPE.SWITCH) {
          return meta.parentValue.enabled === ownValue.enabled;
        }

        return false;
      });
      const updateOwnValue = (updatedValue: any) => {
        const updatedNestedFieldValue = immutabilityHelper(value, {
          ownValue: {
            $set: updatedValue,
          },
        });
        console.log(['updateOwnValue.updatedNestedFieldValue'], updatedNestedFieldValue);
        onChange(updatedNestedFieldValue);
      };
      const updateChildrenValue = (updatedValue: any) => {
        const updatedNestedFieldValue = immutabilityHelper(value, {
          childrenValue: {
            $set: {
              ownValue: updatedValue,
            },
          },
        });
        console.log(['updateChildrenValue.updatedNestedFieldValue'], updatedNestedFieldValue);
        onChange(updatedNestedFieldValue);
      };
      const updateNestedChildrenValue = (updatedValue: any) => {
        const updatedNestedFieldValue = immutabilityHelper(value, {
          childrenValue: {
            $set: updatedValue,
          },
        });
        console.log(['updateNestedChildrenValue.updatedNestedFieldValue'], updatedNestedFieldValue);
        onChange(updatedNestedFieldValue);
      };

      console.log(['if (fieldType === FIELD_TYPE.NESTED).value'], value);
      console.log(['if (fieldType === FIELD_TYPE.NESTED).nestedChildrenMeta'], nestedChildrenMeta);
      console.log(['if (fieldType === FIELD_TYPE.NESTED).childrenValue'], childrenValue);

      return (
        <Fragment>
          <NestedField
            value={ownValue || {}}
            meta={ownMeta}
            onChange={updateOwnValue}
          />
          {nestedChildrenMeta && (
            <NestedField
              value={childrenValue ? childrenValue.ownValue : {}}
              meta={nestedChildrenMeta.meta}
              onChange={nestedChildrenMeta.meta.fieldType === FIELD_TYPE.NESTED ? updateNestedChildrenValue : updateChildrenValue}
            />
          )}
        </Fragment>
      );
    }

    return null;
  }
}

interface Props {
  data: NestedFieldFragment;
  taskId: string;
}

class NestedFieldContainer extends React.Component<Props> {
  render(): React.ReactNode {
    console.log(['NestedFieldContainer'], this.props);
    const { data } = this.props;
    const { meta, value } = data;

    return (
      <NestedField value={value} meta={meta} onChange={this.handleChange}/>
    );
    //
    // const { data } = this.props;
    // const { fieldId, value: { ownValue, childrenValue }, meta: { ownMeta, childrenMeta } } = data;
    //
    // if (!ownMeta) {
    //   throw new Error(`no meta for field ${fieldId}`);
    // }
    //
    // const nestedChildrenMeta = childrenMeta && childrenMeta.find((item) => {
    //   if (item) {
    //     return item.parentValue === ownValue;
    //   }
    //
    //   return false;
    // });
    //
    // const nestedChildrenOwnMeta = nestedChildrenMeta && nestedChildrenMeta.meta && nestedChildrenMeta.meta.ownMeta;
    // const deepNestedChildrenValue = childrenValue && childrenValue.childrenValue;
    // const deepNestedChildrenMeta = nestedChildrenMeta
    //   && nestedChildrenMeta.meta
    //   && nestedChildrenMeta.meta.childrenMeta
    //   && nestedChildrenMeta.meta.childrenMeta.find((item) => {
    //     if (item && childrenValue) {
    //       return item.parentValue === childrenValue.ownValue;
    //     }
    //
    //     return false;
    //   });
    // const { helperText, label, options } = ownMeta;
    //
    // return (
    //   <Fragment>
    //     <Choice
    //       label={label}
    //       value={ownValue ? ownValue.id : ''}
    //       helperText={helperText}
    //       options={options}
    //       onChange={(...args: any) => { console.log(['onChange'], args); }}
    //     />
    //     {this.renderNestedField(childrenValue, nestedChildrenMeta, (...args: any) => { console.log(['onChange'], args); })}
    //     {nestedChildrenOwnMeta && nestedChildrenMeta && nestedChildrenMeta.fieldType === FIELD_TYPE.NESTED && (
    //       <Fragment>
    //         <Choice
    //           label={nestedChildrenOwnMeta.label}
    //           value={childrenValue && childrenValue.ownValue && childrenValue.ownValue.id ? childrenValue.ownValue.id : ''}
    //           helperText={nestedChildrenOwnMeta.helperText}
    //           options={nestedChildrenOwnMeta.options}
    //           onChange={(...args: any) => { console.log(['onChange'], args); }}
    //         />
    //         {this.renderNestedField(deepNestedChildrenValue, deepNestedChildrenMeta, (...args: any) => { console.log(['onChange'], args); })}
    //       </Fragment>
    //     )}
    //   </Fragment>
    // );
  }

  private handleChange = async (updatedFieldValue: any): Promise<void> => {
    console.log(['NestedFieldContainer.handleChange.updatedFieldValue'], updatedFieldValue);
    const { taskId, data: { id } } = this.props;

    await updateTaskNestedFieldMutation({ fieldId: id, fieldValue: updatedFieldValue, taskId });
  };

  // private renderNestedField(nestedFieldValue: any, nestedFieldMeta: any, onValueChange: any) {
  //   if (nestedFieldMeta && nestedFieldMeta.fieldType === FIELD_TYPE.CHOICE) {
  //     return (
  //       <Choice
  //         label={nestedFieldMeta.meta.label}
  //         value={nestedFieldValue && nestedFieldValue.ownValue ? nestedFieldValue.ownValue : ''}
  //         helperText={nestedFieldMeta.meta.helperText}
  //         required={nestedFieldMeta.meta.required}
  //         options={nestedFieldMeta.meta.options}
  //         onChange={onValueChange}
  //       />
  //     );
  //   }
  //
  //   if (nestedFieldMeta && nestedFieldMeta.fieldType === FIELD_TYPE.TEXT) {
  //     return (
  //       <Text
  //         value={nestedFieldValue && nestedFieldValue.ownValue ? nestedFieldValue.ownValue : ''}
  //         label={nestedFieldMeta.meta.label}
  //         helperText={nestedFieldMeta.meta.helperText}
  //         max={nestedFieldMeta.meta.max || undefined}
  //         min={nestedFieldMeta.meta.min || undefined}
  //         minLength={nestedFieldMeta.meta.minLength || undefined}
  //         maxLength={nestedFieldMeta.meta.maxLength || undefined}
  //         required={nestedFieldMeta.meta.required}
  //         inputType={nestedFieldMeta.meta.inputType || undefined}
  //         onChange={onValueChange}
  //       />
  //     );
  //   }
  //
  //   return null;
  // }
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
            meta {
              ...ChoiceFieldFragmentMeta @relay(mask: false)
              ...TextFieldFragmentMeta @relay(mask: false)
              ...SwitchFieldFragmentMeta @relay(mask: false)
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
                  meta {
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
      value {
        ... on NestedValueType {
          ownValue {
            ... on SwitchValueType {
              enabled
            }
            ... on ChoiceValueType {
              id
            }
            ... on TextValueType {
              text
            }
          }
          childrenValue {
            ownValue {
              ... on SwitchValueType {
                enabled
              }
              ... on ChoiceValueType {
                id
              }
              ... on TextValueType {
                text
              }
            }
            childrenValue {
              ownValue {
                ... on SwitchValueType {
                  enabled
                }
                ... on ChoiceValueType {
                  id
                }
                ... on TextValueType {
                  text
                }
              }
              childrenValue {
                ownValue {
                  ... on SwitchValueType {
                    enabled
                  }
                  ... on ChoiceValueType {
                    id
                  }
                  ... on TextValueType {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
);
