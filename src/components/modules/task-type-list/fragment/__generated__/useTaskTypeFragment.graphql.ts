/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskTypeFragment$ref = any;
export type useTaskTypeFragment = {
    readonly id: string;
    readonly typeId: TaskTypeId | null;
    readonly label: string | null;
    readonly description: string | null;
    readonly " $refType": useTaskTypeFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useTaskTypeFragment",
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
            "name": "typeId",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "label",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'eb870fd7838b7dd406c970c73d51c783';
export default node;
