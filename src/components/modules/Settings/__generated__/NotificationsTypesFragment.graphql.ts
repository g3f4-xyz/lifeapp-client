/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NotificationsTypesFragment$ref = any;
export type NotificationsTypesFragment = {
    readonly events: boolean;
    readonly meetings: boolean;
    readonly routines: boolean;
    readonly todos: boolean;
    readonly " $refType": NotificationsTypesFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "NotificationsTypesFragment",
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
(node as any).hash = 'e534f4004b729d5479fedd9c3606455a';
export default node;
