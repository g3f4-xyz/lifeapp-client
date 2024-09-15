/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSettingsFragment = {
    readonly ownerId: string;
    readonly notifications: {
        readonly id: string;
        readonly general: {
            readonly " $fragmentRefs": FragmentRefs<"useNotificationsGeneralFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"useNotificationsTaskTypesFragment" | "useSubscriptionListFragment">;
    };
    readonly " $refType": "useSettingsFragment";
};
export type useSettingsFragment$data = useSettingsFragment;
export type useSettingsFragment$key = {
    readonly " $data"?: useSettingsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSettingsFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSettingsFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ownerId",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": "NotificationsSettings",
            "kind": "LinkedField",
            "name": "notifications",
            "plural": false,
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
                    "concreteType": "GeneralNotificationsSettings",
                    "kind": "LinkedField",
                    "name": "general",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useNotificationsGeneralFragment"
                        }
                    ],
                    "storageKey": null
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useNotificationsTaskTypesFragment"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useSubscriptionListFragment"
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Settings",
    "abstractKey": null
} as any;
(node as any).hash = '13571e2c113dcc00ef4d20182f771bec';
export default node;
