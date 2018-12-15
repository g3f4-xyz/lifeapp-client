import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Input, MultipleChoiceWithParent, Select, Switch } from './form/index';

const getComponent = (format) => {
  return ({
    BOOL: Switch,
    CHOICE: Select,
    MULTIPLE_CHOICE_WITH_PARENT: MultipleChoiceWithParent,
    TEXT: Input,
  })[format];
};

const styles = theme => console.log(['theme.breakpoints'], theme.breakpoints) ||({
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  }
});

class Field extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    props: PropTypes.object,
    format: PropTypes.string,
  };

  render() {
    const { classes, format, props } = this.props;
    const Component = getComponent(format);

    return (
      <FormControl className={classes.container}>
        <Component {...props} />
      </FormControl>
    );
  }
}

export default withStyles(styles)(Field);
