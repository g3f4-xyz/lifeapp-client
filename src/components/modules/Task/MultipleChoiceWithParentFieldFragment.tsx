import {
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  StyledComponentProps,
  Theme,
  Typography, withStyles,
} from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import MultipleSelect from '../../display/form/MultipleSelect';
import { MultipleChoiceWithParentFieldFragment } from './__generated__/MultipleChoiceWithParentFieldFragment.graphql';

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: MultipleChoiceWithParentFieldFragment;
  taskId: string;
}

const styles = (theme: Theme) => ({
  noParentValue: {
    marginTop: theme.spacing.unit * 2,
  },
});

class MultipleChoiceWithParentField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data, classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fieldId, label, meta: { defaultValue, optionsSet }, value } = data;
    const { ids, customValueOptionValue, parentValue } = value;

    if (!parentValue) {
      return (
        <div className={classes.noParentValue}>
          <Typography variant="subheading" gutterBottom align="center">
            {`Select parent value`}
          </Typography>
        </div>
      );
    }

    const set = optionsSet && optionsSet.find((item) => item.parentValue === (parentValue || defaultValue));

    if (!set) {
      throw new Error(`no options set for parentValue: ${parentValue}`);
    }

    const { options, customValueOptionMask } = set;

    return (
      <MultipleSelect
        fieldId={fieldId}
        customValueOptionValue={customValueOptionValue}
        label={label}
        ids={ids ? ids : undefined}
        options={options}
        customValueOptionMask={customValueOptionMask}
      />
    );
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(MultipleChoiceWithParentField),
  graphql`
    fragment MultipleChoiceWithParentFieldFragment on FieldType {
      fieldId
      helperText
      label
      format
      meta {
        ... on MultipleChoiceWithParentType {
          defaultValue
          parentID
          optionsSet {
            customValueOptionMask
            parentValue
            options {
              text
              value
            }
          }
        }
      }
      value {
        ... on MultipleChoiceWithParentValueType {
          customValueOptionValue
          ids
          parentValue
        }
      }
    }
  `,
);
