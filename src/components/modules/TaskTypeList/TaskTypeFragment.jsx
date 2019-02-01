import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import TaskTypeIcon from '../../display/TaskTypeIcon';

const styles = {
  actionsContainer: {
    height: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    width: 250,
    height: 250,
    margin: 20,
  },
  nameContainer: {
    height: '15%',
    width: '100%',
    textAlign: 'center',
  },
  descContainer: {
    height: '65%',
    width: '100%',
  },
  descText: {
    padding: 0,
    margin: 0,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  infoButton: {
    color: '#505ae8',
    height: 72,
    width: 72,
  },
  addButton: {
    color: '#8BC34A',
    height: 72,
    width: 72,
  },
  fontSize72: {
    fontSize: 72,
  }
};

class TaskTypeFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
    onSelect: PropTypes.func,
  };

  state = {
    info: false,
  };

  onInfo = () => {
    this.setState({
      info: !this.state.info,
    });
  };

  render() {
    console.log(['TaskTypeFragment:render'], this.props);
    const { classes, data, onSelect } = this.props;
    const { name, description, typeId } = data;

    return (
      <div className={classes.container}>
        <div className={classes.nameContainer}>
          <h1>{name}</h1>
        </div>
        <div className={classes.descContainer}>
        {this.state.info ? (
          <h3 className={classes.descText}>{description}</h3>
        ) : (
          <TaskTypeIcon type={typeId} className={classes.icon} />
        )}
        </div>
        <div className={classes.actionsContainer}>
          <IconButton
            key="TaskTypeList:List:IconButton:Info"
            className={classes.infoButton}
            onClick={this.onInfo}
          >
            <InfoOutlined className={classes.fontSize72} />
          </IconButton>
          <IconButton
            key="TaskTypeList:List:IconButton:Add"
            className={classes.addButton}
            onClick={() => onSelect(typeId)}
          >
            <AddCircle className={classes.fontSize72} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(TaskTypeFragment),
  graphql`
    fragment TaskTypeFragment on TaskTypeType {
      id
      typeId
      name
      description
    }
  `,
);
