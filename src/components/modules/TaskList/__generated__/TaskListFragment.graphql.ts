/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TaskStatusEnum = "DONE" | "IN_PROGRESS" | "TODO";
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type TaskListFragment$ref = any;
export type TaskListFragment = {
    readonly id: string;
    readonly taskType: TaskTypeEnum;
    readonly note: string | null;
    readonly title: string;
    readonly priority: boolean;
    readonly status: TaskStatusEnum;
    readonly " $refType": TaskListFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TaskListFragment",
    "type": "TaskType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "taskType",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "note",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "priority",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '04855dd577c530188ffd671b591204e5';
export default node;
