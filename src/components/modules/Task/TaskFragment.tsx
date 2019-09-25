import { createStyles, IconButton, Paper, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Done } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { Container, createFragmentContainer, RelayProp } from 'react-relay';
import { FIELD_TYPE_VALUE_MAP } from '../../../constans';
import { FieldTypeEnum, TaskFragment_data as TaskFragmentResponse } from './__generated__/TaskFragment_data.graphql';
import ChoiceFieldFragment from './fields/ChoiceFieldFragment';
import NestedFieldFragment from './fields/NestedFieldFragment';
import SliderFieldFragment from './fields/SliderFieldFragment';
import SwitchFieldFragment from './fields/SwitchFieldFragment';
import TextFieldFragment from './fields/TextFieldFragment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<Container<Props & any>> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      // flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
      },
    },
    row: {
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
    },
    rowField: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(1),
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    doneButton: {
      zIndex: 9,
      // position: 'fixed',
      bottom: 20,
      right: 20,
    },
    doneButtonIcon: {
      color: '#8BC34A',
      fontSize: 72,
    },
  }),
);

interface Props {
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
    const { data } = this.props;
    const classes = useStyles();

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fields } = data;

    const fieldsGroupedByOrder = fields.reduce((acc, field) => {
      const { order } = field;

      if (typeof order === 'number' && !acc[order]) {
        acc[order] = [];
      }

      if (typeof order === 'number') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        acc[order].push(field);
      }

      return acc;
    }, new Array<typeof fields>());

    return (
      <div className={classes.wrapper}>
        {fieldsGroupedByOrder.map((fieldsInRow, key) => (
          <Paper className={classes.row} key={key}>
            {fieldsInRow.map(field => {
              const Component = FIELD_COMPONENTS_MAP[field.fieldType as FieldTypeEnum];

              return <Component key={field.fieldId} data={field} taskId={data.id} />;
            })}
          </Paper>
        ))}
        <IconButton className={classes.doneButton} color="primary" onClick={this.handleDone}>
          <Done className={classes.doneButtonIcon} />
        </IconButton>
      </div>
    );
  }
}

export default createFragmentContainer<Props>(Task, {
  data: graphql`
    fragment TaskFragment_data on TaskType {
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
        ...SliderFieldFragment_data
        ...SwitchFieldFragment_data
        ...ChoiceFieldFragment_data
        ...TextFieldFragment_data
        ...NestedFieldFragment_data
      }
    }
  `,
});
