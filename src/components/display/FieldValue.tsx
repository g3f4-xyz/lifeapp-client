import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import { CUSTOM_OPTION_VALUE, FIELD_FORMATS } from '../../constans';
import { FieldFormatEnum } from '../modules/Task/__generated__/FieldFragment.graphql';

const styles = (theme: Theme) => ({
  value: {
    padding: theme.spacing.unit * 2,
  },
  container: {
    width: '80%',
    textAlign: 'right',
  },
});

const valueFormatter = (value: any, format: FieldFormatEnum, meta: any): string => {
  const { options, optionsSet } = meta;

  if (format === FIELD_FORMATS.BOOL) {
    return value.bool ? 'Yes' : 'No';
  } else if (format === FIELD_FORMATS.CHOICE && options) {
    const foundOption = options.find((option: any) => {
      if (option) {
        return option.value === value.id;
      }

      return false;
    });

    return foundOption ? foundOption.text : '';
  } else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT && optionsSet) {
    const foundOptionsSet = optionsSet.find((set: any) => {
      if (set && set.parentValue) {
        return set.parentValue === value.parentValue;
      }

      return false;
    });
    const customValueAppendix = ` (${value.customValueOptionValue})`;

    if (!foundOptionsSet || !foundOptionsSet.options) {
      throw new Error(`no options set for multiple choice with parent with value: ${value.parentValue}`);
    }

    if (!value.ids) {
      throw new Error(`no ids for multiple choice with parent with value: ${value.parentValue}`);
    }

    return value.ids
      .map((id: any) =>
        `${valueFormatter(
            { id },
            FIELD_FORMATS.CHOICE,
            { options: foundOptionsSet.options as ReadonlyArray<{
               readonly text: string;
               readonly value: string;
             } | null> | undefined },
          )}
          ${id !== CUSTOM_OPTION_VALUE ? '' : customValueAppendix}
        `,
      )
      .join(' ,');
  } else if (format === FIELD_FORMATS.TEXT) {
    return value && value.text ? value.text : '';
  }

  return '';
};

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  meta: any;
  value: any;
  format: FieldFormatEnum;
}

class FieldValue extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, format, meta, value } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <div className={classes.container}>
        <div className={classes.value}>{valueFormatter(value, format, meta)}</div>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(FieldValue);
