/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useNotificationsTypesFragment$ref = any;
export type useNotificationsTypesFragment = {
    readonly events: boolean;
    readonly goals: boolean;
    readonly meetings: boolean;
    readonly routines: boolean;
    readonly todos: boolean;
    readonly " $refType": useNotificationsTypesFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useNotificationsTypesFragment",
    "type": "TypesNotificationsSettings",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "events",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "goals",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "meetings",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "routines",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "todos",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'd69fa452abd8cc79718d4f0cda12bb45';
export default node;
