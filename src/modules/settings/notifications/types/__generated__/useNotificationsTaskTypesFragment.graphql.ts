/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useNotificationsTaskTypesFragment = {
    readonly types: ReadonlyArray<{
        readonly taskTypeId: string;
        readonly enabled: boolean;
    }>;
    readonly " $refType": "useNotificationsTaskTypesFragment";
};
export type useNotificationsTaskTypesFragment$data = useNotificationsTaskTypesFragment;
export type useNotificationsTaskTypesFragment$key = {
    readonly " $data"?: useNotificationsTaskTypesFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useNotificationsTaskTypesFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useNotificationsTaskTypesFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "NotificationsSettingsTaskTypes",
            "kind": "LinkedField",
            "name": "types",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "taskTypeId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "enabled",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "NotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = '194a3978e344ea5af41b0c5dc17b1b19';
export default node;
