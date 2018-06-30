import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FIELD_FORMATS }  from '../constans';
const styles = theme => ({
  value: {
    padding: theme.spacing.unit * 2,
  },
  container: {
    width: '80%',
    textAlign: 'right',
  },
});

const valueFormatter = (value, format, meta) => {
  const { options, optionsSet } = meta || {};
  if (format === FIELD_FORMATS.BOOL) {
    return value.bool ? 'Yes' : 'No';
  }
  else if (format === FIELD_FORMATS.CHOICE) {
    const option = options.find(option => option.value === value.id);

    return option ? option.text : '';
  }
  else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT) {
    const { options = [] } = optionsSet.find(set => set.parentValue === value.parentValue) || {};
    const customValueAppendix = ` (${value.customValueOptionValue})`;

    return value.ids && value
      .ids.map(id =>
        `${valueFormatter({ id }, FIELD_FORMATS.CHOICE, { options })}${Boolean(id) ? '' : customValueAppendix}`)
      .join(' ,');
  }
  else if (format === FIELD_FORMATS.TEXT) {
    return value ? value.text : '';
  }
};

class FieldValue extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    meta: PropTypes.object,
    value: PropTypes.object,
    format: PropTypes.string,
  };

  render() {
    console.log(['FieldValue:render'], this.props);
    const { classes, format, meta, value } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.value}>{valueFormatter(value, format, meta)}</div>
      </div>
    );
  }
}

export default withStyles(styles)(FieldValue);
