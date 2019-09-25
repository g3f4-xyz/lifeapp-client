import { IconButton, Paper } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { Container, createFragmentContainer, RelayProp } from 'react-relay';
import { FIELD_TYPE_VALUE_MAP } from '../../../constans';
import {
  FieldTypeEnum,
  TaskFragment_data as TaskFragmentResponse,
} from './__generated__/TaskFragment_data.graphql';
import ChoiceFieldFragment from './fields/ChoiceFieldFragment';
import NestedFieldFragment from './fields/NestedFieldFragment';
import SliderFieldFragment from './fields/SliderFieldFragment';
import SwitchFieldFragment from './fields/SwitchFieldFragment';
import TextFieldFragment from './fields/TextFieldFragment';
import useTaskFragmentStyles from './useTaskFragmentStyles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<Container<TaskFragmentProps & any>> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

interface TaskFragmentProps {
  editMode: boolean;
  data: TaskFragmentResponse;
  isNew: boolean;
  taskListId: string;
  relay: RelayProp;

  onDone(id: string): void;
}

const TaskFragment: FC<TaskFragmentProps> = props => {
  const { data } = props;
  const handleDone = () => {
    props.onDone(props.data.id);
  };
  const classes = useTaskFragmentStyles();

  const { fields } = data;
  const orders = new Set(fields.map(field => field.order).sort());

  return (
    <div className={classes.wrapper}>
      {[...orders].map(order => {
        const rowFields = fields.filter(field => field.order === order);

        return (
          <Paper className={classes.row} key={order}>
            {rowFields.map(field => {
              const Component = FIELD_COMPONENTS_MAP[field.fieldType as FieldTypeEnum];

              return <Component key={field.fieldId} data={field} taskId={data.id} />;
            })}
          </Paper>
        );
      })}
      <IconButton className={classes.doneButton} color="primary" onClick={handleDone}>
        <Done className={classes.doneButtonIcon} />
      </IconButton>
    </div>
  );
};

export default createFragmentContainer<TaskFragmentProps>(TaskFragment, {
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
