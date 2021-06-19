/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NotificationsTypesFragment_data$ref = any;
export type NotificationsTypesFragment_data = {
    readonly events: boolean;
    readonly goals: boolean;
    readonly meetings: boolean;
    readonly routines: boolean;
    readonly todos: boolean;
    readonly " $refType": NotificationsTypesFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "NotificationsTypesFragment_data",
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
(node as any).hash = '8eec3f9ea582c756893bd21ef0d6a43d';
export default node;
