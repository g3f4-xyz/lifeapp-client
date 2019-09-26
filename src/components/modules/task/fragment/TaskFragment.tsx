import { IconButton, Paper } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import React, { FC } from 'react';
import { Container } from 'react-relay';
import { FIELD_TYPE_VALUE_MAP } from '../../../../constans';
import ChoiceFieldFragment from '../fields/ChoiceFieldFragment';
import NestedFieldFragment from '../fields/NestedFieldFragment';
import SliderFieldFragment from '../fields/SliderFieldFragment';
import SwitchFieldFragment from '../fields/SwitchFieldFragment';
import TextFieldFragment from '../fields/TextFieldFragment';
import useTaskFragmentStyles from './useTaskFragmentStyles';
import { useTaskFragment$ref } from './__generated__/useTaskFragment.graphql';
import useTaskFragment from './useTaskFragment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<Container<TaskFragmentProps & any>> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

interface TaskFragmentProps {
  taskListId: string;
  isNew: boolean;
  editMode: boolean;
  data: useTaskFragment$ref;

  onDone(id: string): void;
}

const TaskFragment: FC<TaskFragmentProps> = props => {
  const { data } = props;
  const handleDone = () => {
    props.onDone(props.data.id);
  };
  const classes = useTaskFragmentStyles();
  const { fields } = useTaskFragment(data);
  const orders = new Set(fields.map(field => field.order).sort());

  return (
    <div className={classes.wrapper}>
      {[...orders].map(order => {
        const rowFields = fields.filter(field => field.order === order);

        return (
          <Paper className={classes.row} key={order}>
            {rowFields.map(field => {
              const Component = FIELD_COMPONENTS_MAP[field.fieldType || ''];

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

export default TaskFragment;