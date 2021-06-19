/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NotificationsGeneralFragment_data$ref = any;
type NotificationsTypesFragment_data$ref = any;
type SubscriptionsPagination_data$ref = any;
export type SettingsFragment_data$ref = any;
export type SettingsFragment_data = {
    readonly ownerId: string;
    readonly notifications: {
        readonly id: string;
        readonly general: {
            readonly " $fragmentRefs": NotificationsGeneralFragment_data$ref;
        };
        readonly types: {
            readonly " $fragmentRefs": NotificationsTypesFragment_data$ref;
        };
        readonly " $fragmentRefs": SubscriptionsPagination_data$ref;
    };
    readonly " $refType": SettingsFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SettingsFragment_data",
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
                            "name": "NotificationsGeneralFragment_data",
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
                            "name": "NotificationsTypesFragment_data",
                            "args": null
                        }
                    ]
                },
                {
                    "kind": "FragmentSpread",
                    "name": "SubscriptionsPagination_data",
                    "args": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'd4f0ed76be24ac709e45ea699bfe19e3';
export default node;
