import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  StyledComponentProps,
  Theme,
  withStyles,
} from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, Fragment } from 'react';
import { createFragmentContainer } from 'react-relay';
import immutabilityHelper from 'immutability-helper'
import { TripleChoiceValueInputType } from '../../../mutations/__generated__/updateTaskTripleChoiceFieldMutation.graphql';
import updateTaskTripleChoiceFieldMutation from '../../../mutations/updateTaskTripleChoiceFieldMutation';
import { TripleChoiceFieldFragment } from './__generated__/TripleChoiceFieldFragment.graphql';

const styles = (theme: Theme) => ({
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: TripleChoiceFieldFragment;
  taskId: string;
}

class TripleChoiceField extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fieldId, value: { ownValue, childrenValue }, meta: { ownMeta, childrenMeta } } = data;

    if (!ownMeta) {
      throw new Error(`no meta for field`);
    }

    const childrenM = childrenMeta && childrenMeta.find((item) => {
      if (item) {
        return item.parentValue === ownValue;
      }

      return false;
    });
    console.log(['childrenM'], childrenM);

    const { helperText, label, options } = ownMeta;

    return (
      <Fragment>
        <FormControl className={classes.container}>
          <InputLabel htmlFor={fieldId}>{label}</InputLabel>
          <Select
            value={ownValue || ''}
            onChange={this.handleOwnValueChange}
            input={<Input name={fieldId} id={fieldId}/>}
          >
            {options && options.map((option) => option && (
              <MenuItem
                key={option.value}
                value={option.value}
              >{option.text}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        {childrenM && childrenM.meta && (
          <FormControl className={classes.container}>
            <InputLabel htmlFor={fieldId}>{label}</InputLabel>
            <Select
              value={childrenValue && childrenValue.ownValue ? childrenValue.ownValue : ''}
              onChange={this.handleChildrenValueChange}
              input={<Input />}
            >
              {childrenM.meta.options && childrenM.meta.options.map((option) => option && (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >{option.text}</MenuItem>
              ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        )}
      </Fragment>
    );
  }

  private handleOwnValueChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const { taskId, data: { id } } = this.props;

    await updateTaskTripleChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue: { ownValue: event.target.value },
    });
  };

  private handleChildrenValueChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const { taskId, data: { id, value } } = this.props;
    console.log(['handleChildrenValueChange'], value)

    const fieldValue: any = immutabilityHelper(value,  {
      childrenValue: {
        $set: {
          ownValue: event.target.value,
          childrenValue: null,
        },
      },
    });

    console.log(['handleChildrenValueChange'], fieldValue)

    await updateTaskTripleChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue,
    });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TripleChoiceField),
  graphql`
    fragment TripleChoiceFieldFragment on FieldType {
      id
      fieldId
      meta {
        ... on TripleChoiceMetaType {
          ownMeta {
            ... on ChoiceMetaType {
              helperText
              label
              required
              options {
                text
                value
              }
            }
          }
          childrenMeta {
            fieldType
            parentValue
            meta {
              ... on ChoiceMetaType {
                helperText
                label
                required
                options {
                  text
                  value
                }
              }
              ... on TextMetaType {
                helperText
                label
                inputType
                min
                max
                maxLength
                minLength
                required
              }
              ... on TripleChoiceMetaType {
                fieldType
                parentValue
                ownMeta {
                  ... on ChoiceMetaType {
                    helperText
                    label
                    required
                    options {
                      text
                      value
                    }
                  }
                  ... on TextMetaType {
                    helperText
                    label
                    inputType
                    min
                    max
                    maxLength
                    minLength
                    required
                  }
                }
                childrenMeta {
                  fieldType
                  parentValue
                  meta {
                    ... on ChoiceMetaType {
                      helperText
                      label
                      required
                      options {
                        text
                        value
                      }
                    }
                    ... on TextMetaType {
                      helperText
                      label
                      inputType
                      min
                      max
                      maxLength
                      minLength
                      required
                    }
                  }
                }
              }
            }
          }
        }
      }
      value {
        ... on TripleChoiceValueType {
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
