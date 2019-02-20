import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  StyledComponentProps,
  Theme,
  withStyles,
} from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import immutabilityHelper from 'immutability-helper';
import React, { Fragment } from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_TYPE } from '../../../constans';
import updateTaskNestedChoiceFieldMutation from '../../../mutations/updateTaskNestedChoiceFieldMutation';
import Choice from '../../display/Choice';
import Text from '../../display/Text';
import { NestedChoiceFieldFragment } from './__generated__/NestedChoiceFieldFragment.graphql';

interface Props{
  data: NestedChoiceFieldFragment;
  taskId: string;
}

class NestedChoiceField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { fieldId, value: { ownValue, childrenValue }, meta: { ownMeta, childrenMeta } } = data;

    if (!ownMeta) {
      throw new Error(`no meta for field ${fieldId}`);
    }

    const nestedChildrenMeta = childrenMeta && childrenMeta.find((item) => {
      if (item) {
        return item.parentValue === ownValue;
      }

      return false;
    });

    const nestedChildrenOwnMeta = nestedChildrenMeta && nestedChildrenMeta.meta && nestedChildrenMeta.meta.ownMeta;
    const deepNestedChildrenValue = childrenValue && childrenValue.childrenValue;
    const deepNestedChildrenMeta = nestedChildrenMeta
      && nestedChildrenMeta.meta
      && nestedChildrenMeta.meta.childrenMeta
      && nestedChildrenMeta.meta.childrenMeta.find((item) => {
        if (item && childrenValue) {
          return item.parentValue === childrenValue.ownValue;
        }

        return false;
      });
    const { helperText, label, options } = ownMeta;

    return (
      <Fragment>
        <Choice
          label={label}
          value={ownValue || ''}
          helperText={helperText}
          options={options}
          onChange={this.handleOwnValueChange}
        />
        {this.renderNestedField(childrenValue, nestedChildrenMeta, this.handleNestedValueChange)}
        {nestedChildrenOwnMeta && nestedChildrenMeta && nestedChildrenMeta.fieldType === FIELD_TYPE.NESTED_CHOICE && (
          <Fragment>
            <Choice
              label={nestedChildrenOwnMeta.label}
              value={childrenValue && childrenValue.ownValue ? childrenValue.ownValue : ''}
              helperText={nestedChildrenOwnMeta.helperText}
              options={nestedChildrenOwnMeta.options}
              onChange={this.handleNestedValueChange}
            />
            {this.renderNestedField(deepNestedChildrenValue, deepNestedChildrenMeta, this.handleDeepNestedValueChange)}
          </Fragment>
        )}
      </Fragment>
    );
  }

  private renderNestedField(nestedFieldValue: any, nestedFieldMeta: any, onValueChange: any) {
    if (nestedFieldMeta && nestedFieldMeta.fieldType === FIELD_TYPE.CHOICE) {
      return (
        <Choice
          label={nestedFieldMeta.meta.label}
          value={nestedFieldValue && nestedFieldValue.ownValue ? nestedFieldValue.ownValue : ''}
          helperText={nestedFieldMeta.meta.helperText}
          required={nestedFieldMeta.meta.required}
          options={nestedFieldMeta.meta.options}
          onChange={onValueChange}
        />
      );
    }

    if (nestedFieldMeta && nestedFieldMeta.fieldType === FIELD_TYPE.TEXT) {
      return (
        <Text
          value={nestedFieldValue && nestedFieldValue.ownValue ? nestedFieldValue.ownValue : ''}
          label={nestedFieldMeta.meta.label}
          helperText={nestedFieldMeta.meta.helperText}
          max={nestedFieldMeta.meta.max || undefined}
          min={nestedFieldMeta.meta.min || undefined}
          minLength={nestedFieldMeta.meta.minLength || undefined}
          maxLength={nestedFieldMeta.meta.maxLength || undefined}
          required={nestedFieldMeta.meta.required}
          inputType={nestedFieldMeta.meta.inputType || undefined}
          onChange={onValueChange}
        />
      );
    }

    return null;
  }

  private handleOwnValueChange = async (ownValue: string): Promise<void> => {
    const { taskId, data: { id, value } } = this.props;

    const fieldValue = immutabilityHelper(value,  {
      ownValue: {
        $set: ownValue,
      },
      childrenValue: {
        ownValue: {
          $set: '',
        },
      },
    });

    await updateTaskNestedChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue,
    });
  };

  private handleNestedValueChange = async (ownValue: string): Promise<void> => {
    const { taskId, data: { id, value } } = this.props;

    const fieldValue = immutabilityHelper(value,  {
      childrenValue: {
        $set: {
          ownValue,
          childrenValue: {
            ownValue: '',
          },
        },
      },
    });

    await updateTaskNestedChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue,
    });
  };

  private handleDeepNestedValueChange = async (ownValue: string): Promise<void> => {
    const { taskId, data: { id, value } } = this.props;
    const fieldValue = immutabilityHelper(value,  {
      childrenValue: {
        childrenValue: {
          ownValue: {
            $set: ownValue,
          },
        },
      },
    });

    await updateTaskNestedChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue,
    });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  NestedChoiceField,
  graphql`
    fragment NestedChoiceFieldFragment on FieldType {
      id
      fieldId
      meta {
        ... on NestedChoiceMetaType {
          ownMeta {
            ...ChoiceFieldFragmentMeta @relay(mask: false)
          }
          childrenMeta {
            fieldType
            parentValue
            meta {
              ...ChoiceFieldFragmentMeta @relay(mask: false)
              ...TextFieldFragmentMeta @relay(mask: false)
              ... on NestedChoiceMetaType {
                fieldType
                parentValue
                ownMeta {
                  ...ChoiceFieldFragmentMeta @relay(mask: false)
                  ...TextFieldFragmentMeta @relay(mask: false)
                }
                childrenMeta {
                  fieldType
                  parentValue
                  meta {
                    ...ChoiceFieldFragmentMeta @relay(mask: false)
                    ...TextFieldFragmentMeta @relay(mask: false)
                  }
                }
              }
            }
          }
        }
      }
      value {
        ... on NestedChoiceValueType {
          ownValue
          childrenValue {
            ownValue
            childrenValue {
              ownValue
            }
          }
        }
      }
    }
  `,
);
