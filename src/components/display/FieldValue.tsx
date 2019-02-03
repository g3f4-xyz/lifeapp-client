import { Theme, withStyles } from '@material-ui/core';
import React from 'react';
import { CUSTOM_OPTION_VALUE, FIELD_FORMATS } from '../../constans';

const styles = (theme: Theme) => ({
  value: {
    padding: theme.spacing.unit * 2,
  },
  container: {
    width: '80%',
    textAlign: 'right',
  },
});

const valueFormatter = (value: any, format: any, meta: any): any => {
  const { options, optionsSet }: any = meta || {};
  if (format === FIELD_FORMATS.BOOL) {
    return value.bool ? 'Yes' : 'No';
  }
  else if (format === FIELD_FORMATS.CHOICE) {
    const option = options.find((option: any) => option.value === value.id);

    return option ? option.text : '';
  }
  else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT) {
    const { options = [] } =
      optionsSet.find((set: any) => set.parentValue === value.parentValue) || {};
    const customValueAppendix = ` (${value.customValueOptionValue})`;

    return value.ids && value.ids
      .map((id: any) =>
        `${valueFormatter(
            { id },
            FIELD_FORMATS.CHOICE,
            { options }
          )}
          ${id !== CUSTOM_OPTION_VALUE ? '' : customValueAppendix}
        `
      )
      .join(' ,');
  }
  else if (format === FIELD_FORMATS.TEXT) {
    return value ? value.text : '';
  }
};

interface Props {
  classes?: any;
  meta: any;
  value: any;
  format: any;
}

class FieldValue extends React.Component<Props> {
  render() {
    const { classes, format, meta, value } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.value}>{valueFormatter(value, format, meta)}</div>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(FieldValue);
