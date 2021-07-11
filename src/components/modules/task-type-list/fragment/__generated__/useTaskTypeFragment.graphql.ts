/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type useTaskTypeFragment = {
    readonly id: string;
    readonly typeId: TaskTypeId | null;
    readonly label: string | null;
    readonly description: string | null;
    readonly " $refType": "useTaskTypeFragment";
};
export type useTaskTypeFragment$data = useTaskTypeFragment;
export type useTaskTypeFragment$key = {
    readonly " $data"?: useTaskTypeFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskTypeFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTaskTypeFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "typeId",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
        }
    ],
    "type": "TaskType",
    "abstractKey": null
} as any;
(node as any).hash = 'eb870fd7838b7dd406c970c73d51c783';
export default node;
