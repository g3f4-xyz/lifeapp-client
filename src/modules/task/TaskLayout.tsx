import { IconButton, Paper } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import { FIELD_TYPE_VALUE_MAP, MODULES_IDS } from '../../constans';
import { useTaskFragment$key } from './__generated__/useTaskFragment.graphql';
import ChoiceFieldFragment from './fields/ChoiceFieldFragment';
import NestedFieldFragment from './fields/NestedFieldFragment';
import SliderFieldFragment from './fields/SliderFieldFragment';
import SwitchFieldFragment from './fields/SwitchFieldFragment';
import TextFieldFragment from './fields/TextFieldFragment';
import useTaskFragment from './useTaskFragment';
import useTaskStyles from './useTaskStyles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FIELD_COMPONENTS_MAP: FIELD_TYPE_VALUE_MAP<any> = {
  CHOICE: ChoiceFieldFragment,
  SWITCH: SwitchFieldFragment,
  SLIDER: SliderFieldFragment,
  TEXT: TextFieldFragment,
  NESTED: NestedFieldFragment,
};

interface TaskProps {
  data: useTaskFragment$key;
}

export default function TaskLayout(props: TaskProps) {
  const { data } = props;
  const history = useHistory();
  const handleDone = () => {
    history.push(`/app/${MODULES_IDS.TASK_LIST}`);
  };
  const classes = useTaskStyles();
  const { fields, id } = useTaskFragment(data);
  const orders = new Set(fields.map((field) => field.order).sort());

  return (
    <div className={classes.wrapper}>
      {[...orders].map((order) => {
        const rowFields = fields.filter((field) => field.order === order);

        return (
          <Paper className={classes.row} key={order}>
            {rowFields.map((field) => {
              const Component = FIELD_COMPONENTS_MAP[field.fieldType || ''];

              return <Component key={field.fieldId} data={field} taskId={id} />;
            })}
          </Paper>
        );
      })}
      <IconButton className={classes.doneButton} color="primary" onClick={handleDone}>
        <Done className={classes.doneButtonIcon} />
      </IconButton>
    </div>
  );
}
