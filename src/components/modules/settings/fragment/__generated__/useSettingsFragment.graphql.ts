/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type useNotificationsGeneralFragment$ref = any;
type useNotificationsTypesFragment$ref = any;
type useSubscriptionsPagination$ref = any;
export type useSettingsFragment$ref = any;
export type useSettingsFragment = {
    readonly ownerId: string;
    readonly notifications: {
        readonly id: string;
        readonly general: {
            readonly " $fragmentRefs": useNotificationsGeneralFragment$ref;
        };
        readonly types: {
            readonly " $fragmentRefs": useNotificationsTypesFragment$ref;
        };
        readonly " $fragmentRefs": useSubscriptionsPagination$ref;
    };
    readonly " $refType": useSettingsFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSettingsFragment",
    "type": "Settings",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "ownerId",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "notifications",
            "storageKey": null,
            "args": null,
            "concreteType": "NotificationsSettings",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "general",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GeneralNotificationsSettings",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "useNotificationsGeneralFragment",
                            "args": null
                        }
                    ]
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "types",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TypesNotificationsSettings",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "useNotificationsTypesFragment",
                            "args": null
                        }
                    ]
                },
                {
                    "kind": "FragmentSpread",
                    "name": "useSubscriptionsPagination",
                    "args": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'ed8027093aac31e486ae722c869fbace';
export default node;
