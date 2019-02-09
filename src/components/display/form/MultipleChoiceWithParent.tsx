import { Theme, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import MultipleSelect, { MultipleSelectProps } from './MultipleSelect';

const styles = (theme: Theme) => ({
  noParentValue: {
    marginTop: theme.spacing.unit * 2,
  },
});

interface Props extends MultipleSelectProps {
  parentLabel: any;
  parentValue: any;
}

class MultipleChoiceWithParent extends React.Component<Props> {
  render(): React.ReactNode {
    const {
      classes,
      defaultValue,
      optionsSet,
      parentLabel,
      parentValue,
      ids,
      ...selectProps
    } = this.props;

    const { options, customValueOptionMask } =
      optionsSet.find((item: any): any => item.parentValue === (parentValue || defaultValue))
      || { options: [], customValueOptionMask: '' };

    return ids !== null ? (
      <MultipleSelect
        ids={ids}
        options={options}
        customValueOptionMask={customValueOptionMask}
        {...selectProps}
      />
    ) : (
      <div className={classes.noParentValue}>
        <Typography variant="subheading" gutterBottom align="center">
          {`Select ${parentLabel}`}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(MultipleChoiceWithParent);
