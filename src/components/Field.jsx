import React from 'react';
import PropTypes from 'prop-types';
import { Input, MultipleSelectWithParent, Select, Switch } from './form/index';

const getComponent = (format) => {
  return ({
    BOOL: Switch,
    CHOICE: Select,
    MULTIPLE_SELECT_WITH_PARENT: MultipleSelectWithParent,
    TEXT: Input,
  })[format];
};

export default class Field extends React.Component {
  static propTypes = {
    props: PropTypes.object,
    format: PropTypes.string,
  };

  render() {
    const { format, props } = this.props;
    const Component = getComponent(format);

    return (
      <Component {...props} />
    );
  }
}
