import { FormControl, StyledComponentProps, TextField as Input, Theme, withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskTextFieldMutation from '../../../mutations/updateTaskTextFieldMutation';
import { TextFieldFragment } from './__generated__/TextFieldFragment.graphql';

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
  data: TextFieldFragment;
  taskId: string;
}

class TextField extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fieldId, value: { text }, meta } = data;
    const { max, maxLength, min, minLength, required, inputType, label, helperText } = meta;

    return (
      <FormControl className={classes.container}>
        <Input
          id={fieldId}
          label={label}
          required={required}
          InputLabelProps={{ shrink: true }}
          inputProps={{ type: inputType, max, maxLength, min, minLength }}
          helperText={helperText}
          value={text && text.length > 0 ? text : undefined}
          onChange={this.handleChange}
          fullWidth
        />
      </FormControl>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskTextFieldMutation({ fieldId: id, fieldValue: { text: event.target.value }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TextField),
  graphql`
    fragment TextFieldFragment on FieldType {
      id
      fieldId
      meta {
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
      value {
        ... on TextValueType {
          text
        }
      }
    }
  `,
);
