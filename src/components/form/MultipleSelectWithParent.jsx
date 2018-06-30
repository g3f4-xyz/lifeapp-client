import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MultipleSelect from './MultipleSelect';

const styles = theme => ({
});


class MultipleSelectWithParent extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    optionsSet: PropTypes.array,
    parentValue: PropTypes.string,
    ...MultipleSelect.PropTypes,
  };

  render() {
    const { classes, defaultValue, optionsSet, parentValue, ...selectProps } = this.props;

    const { options, customValueOptionMask } = optionsSet.find(item => item.parentValue === (parentValue || defaultValue));

    return (
      <MultipleSelect options={options} customValueOptionMask={customValueOptionMask} {...selectProps} />
    )
  }
}

export default withStyles(styles)(MultipleSelectWithParent);
