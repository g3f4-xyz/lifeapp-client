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
        readonly types: {
            readonly " $fragmentRefs": FragmentRefs<"useNotificationsTypesFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"useSubscriptionsListFragment">;
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
                    "alias": null,
                    "args": null,
                    "concreteType": "TypesNotificationsSettings",
                    "kind": "LinkedField",
                    "name": "types",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useNotificationsTypesFragment"
                        }
                    ],
                    "storageKey": null
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useSubscriptionsListFragment"
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Settings",
    "abstractKey": null
} as any;
(node as any).hash = '6036bb54eb1cf1402dc9fea91193f1bc';
export default node;
