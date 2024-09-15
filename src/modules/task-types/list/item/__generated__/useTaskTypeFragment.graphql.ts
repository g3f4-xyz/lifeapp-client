/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypeFragment = {
    readonly typeId: string;
    readonly label: string;
    readonly description: string;
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
(node as any).hash = '74b57fc8b261afa6d4a48e6e9cd87bf1';
export default node;
