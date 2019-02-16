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
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskPartialChoiceFieldMutation from '../../../mutations/updateTaskPartialChoiceFieldMutation';
import { PartialChoiceFieldFragment } from './__generated__/PartialChoiceFieldFragment.graphql';

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
  data: PartialChoiceFieldFragment;
  taskId: string;
}

class PartialChoiceField extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fieldId, partial, value: { id }, meta: { options, label, helperText } } = data;

    return (
      <FormControl className={classes.container}>
        <InputLabel htmlFor={fieldId}>{label}</InputLabel>
        <Select
          value={id}
          onChange={this.handleChange}
          input={<Input name={fieldId} id={fieldId} />}
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
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskPartialChoiceFieldMutation({
      taskId,
      fieldId: id,
      fieldValue: { id: event.target.value },
    });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(PartialChoiceField),
  graphql`
    fragment PartialChoiceFieldFragment on FieldType @argumentDefinitions(
      fetchPartial: { type: "Boolean", defaultValue: false },
    ) {
      id
      fieldId
      partial {
        ...FieldFragment @include(if: $fetchPartial)
      }
      meta {
        ... on PartialChoiceMetaType {
          helperText
          label
          options {
            text
            value
          }
          required
        }
      }
      value {
        ... on PartialChoiceValueType {
          id
        }
      }
    }
  `,
);
