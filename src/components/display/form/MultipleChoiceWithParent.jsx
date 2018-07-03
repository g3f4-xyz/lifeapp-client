import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MultipleSelect from './MultipleSelect';

const styles = theme => ({
  noParentValue: {
    marginTop: theme.spacing.unit * 2,
  },
});


class MultipleChoiceWithParent extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    optionsSet: PropTypes.array,
    parentValue: PropTypes.string,
    ...MultipleSelect.PropTypes,
  };

  render() {
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
      optionsSet.find(item => item.parentValue === (parentValue || defaultValue))
      || { options: [] };

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
