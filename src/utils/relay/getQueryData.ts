import { RenderProps } from 'relay-hooks';
import { OperationType } from 'relay-runtime';
import assertIsDefined from '../assertIsDefined';

export default function getQueryData<T extends OperationType>(props: RenderProps<T>) {
  const { data } = props;

  assertIsDefined(data);

  return data;
}
