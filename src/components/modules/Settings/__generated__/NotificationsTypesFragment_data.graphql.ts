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
    "type": "NotificationsTypesSettingType",
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
(node as any).hash = '4a370dee4f1b611a3bd8ba13a2f52987';
export default node;
