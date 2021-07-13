/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useNotificationsTypesFragment = {
    readonly events: boolean;
    readonly goals: boolean;
    readonly meetings: boolean;
    readonly routines: boolean;
    readonly todos: boolean;
    readonly " $refType": "useNotificationsTypesFragment";
};
export type useNotificationsTypesFragment$data = useNotificationsTypesFragment;
export type useNotificationsTypesFragment$key = {
    readonly " $data"?: useNotificationsTypesFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useNotificationsTypesFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useNotificationsTypesFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "events",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "goals",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "meetings",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "routines",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "todos",
            "storageKey": null
        }
    ],
    "type": "TypesNotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = 'd69fa452abd8cc79718d4f0cda12bb45';
export default node;
