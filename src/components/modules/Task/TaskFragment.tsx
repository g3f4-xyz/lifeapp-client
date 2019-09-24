import { IconButton, Paper, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { Done } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer, RelayContainer, RelayProp } from 'react-relay';
import { FIELD_TYPE_VALUE_MAP } from '../../../constans';
import {
  TaskFragment as TaskFragmentResponse,
} from './__generated__/TaskFragment.graphql';
import ChoiceFieldFragment from './fields/ChoiceFieldFragment';
import NestedFieldFragment from './fields/NestedFieldFragment';
import SliderFieldFragment from './fields/SliderFieldFragment';
import SwitchFieldFragment from './fields/SwitchFieldFragment';
import TextFieldFragment from './fields/TextFieldFragment';

const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<RelayContainer<Props & any>> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

const styles = (theme: Theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing.unit * 4,
      marginRight: theme.spacing.unit * 4,
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing.unit * 5,
      marginRight: theme.spacing.unit * 5,
    },
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit,
  },
  rowField: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  doneButton: {
    zIndex: 9,
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  doneButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  editMode: boolean;
  data: TaskFragmentResponse;
  isNew: boolean;
  taskListId: string;
  relay: RelayProp;
  onDone(id: string): void;
}

class Task extends React.Component<Props, TaskFragmentResponse> {
  state = this.props.data || {};

  handleDone = () => {
    this.props.onDone(this.props.data.id);
  };

  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fields } = data;

    const fieldsGroupedByOrder = fields.reduce((acc, field) => {
      const { order } = field;

      if (!acc[order as number]) {
        acc[order as number] = [];
      }

      (acc[order as number] as any).push(field);

      return acc;
    }, new Array<typeof fields>());

    return (
      <div className={classes.wrapper}>
        {fieldsGroupedByOrder.map((fieldsInRow, key) => (
          <Paper className={classes.row} key={key}>
            {fieldsInRow.map(field => {
              // @ts-ignore
              const Component = FIELD_COMPONENTS_MAP[field.fieldType];

              return <Component key={field.fieldId} data={field} taskId={data.id} />;
            })}
          </Paper>
        ))}
        <IconButton
          className={classes.doneButton}
          color="primary"
          onClick={this.handleDone}
        >
          <Done className={classes.doneButtonIcon} />
        </IconButton>
      </div>
    );
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(Task),
  graphql`
    fragment TaskFragment on TaskType {
      id
      fields {
        __typename
        ... on ChoiceFieldType {
          fieldId
          fieldType
          order
        }
        ... on SwitchFieldType {
          fieldId
          fieldType
          order
        }
        ... on SliderFieldType {
          fieldId
          fieldType
          order
        }
        ... on NestedFieldType {
          fieldId
          fieldType
          order
        }
        ... on TextFieldType {
          fieldId
          fieldType
          order
        }
        ...SliderFieldFragment
        ...SwitchFieldFragment
        ...ChoiceFieldFragment
        ...TextFieldFragment
        ...NestedFieldFragment
      }
    }
  `,
);
