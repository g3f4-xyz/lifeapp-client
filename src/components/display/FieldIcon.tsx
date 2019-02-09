import { Theme, withStyles } from '@material-ui/core';
import {
  BatteryAlert, Create,
  EventNote,
  NotificationsActive,
  Person,
  PersonPinCircle,
  PriorityHigh,
  Title,
} from '@material-ui/icons';
import React from 'react';

const ICONS = {
  DATE: NotificationsActive,
  NOTE: EventNote,
  PRIORITY: PriorityHigh,
  TITLE: Title,
  STATUS: BatteryAlert,
  PERSON: Person,
  LOCATION: PersonPinCircle,
};

const styles = (theme: Theme) => ({
  icon: {
    margin: theme.spacing.unit,
  },
});

interface Props {
  classes?: any;
  fieldId: any;
}

class FieldIcon extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, fieldId } = this.props;
    // @ts-ignore
    const Icon = ICONS[fieldId] || Create;

    return (
      <Icon className={classes.icon} />
    )
  }
}

export default withStyles(styles)(FieldIcon);
