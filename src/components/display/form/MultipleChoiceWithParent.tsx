import { StyledComponentProps, Theme, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import MultipleSelect from './MultipleSelect';

const styles = (theme: Theme) => ({
  noParentValue: {
    marginTop: theme.spacing.unit * 2,
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  parentLabel: string;
  parentValue: string;
  defaultValue: string;
  ids: string[];
  optionsSet:
    Array<{ options: Array<{ text: string, value: string }>, parentValue: string, customValueOptionMask: string }>;
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

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const set = optionsSet.find((item) => item.parentValue === (parentValue || defaultValue));

    if (!set) {
      throw new Error(`no options set for parentValue: ${parentValue}`);
    }

    const { options, customValueOptionMask } = set;

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
    );
  }
}

export default withStyles(styles)(MultipleChoiceWithParent);
