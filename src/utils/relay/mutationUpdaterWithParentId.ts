import { RecordSourceSelectorProxy } from 'relay-runtime/lib/store/RelayStoreTypes';

export default function mutationUpdaterWithParent(props: {
  mutationName: string;
  responseKey: string;
  storeRecordKey: string;
  parentRecordId: string;
}) {
  return function updater<T>(store: RecordSourceSelectorProxy<T>) {
    const mutationRecord = store.getRootField(props.mutationName);
    const updatedRecord = mutationRecord && mutationRecord.getLinkedRecord(props.responseKey);
    const parentRecord = store.get(props.parentRecordId);

    if (parentRecord && updatedRecord) {
      parentRecord.setLinkedRecord(updatedRecord, props.storeRecordKey);
    }
  };
}

export function mutationUpdaterWithParentMultiple(props: {
  mutationName: string;
  responseKey: string;
  storeRecordKey: string;
  parentRecordId: string;
}) {
  return function updater<T>(store: RecordSourceSelectorProxy<T>) {
    const mutationRecord = store.getRootField(props.mutationName);
    const updatedRecord = mutationRecord && mutationRecord.getLinkedRecords(props.responseKey);
    const parentRecord = store.get(props.parentRecordId);

    if (parentRecord && updatedRecord) {
      parentRecord.setLinkedRecords(updatedRecord, props.storeRecordKey);
    }
  };
}
