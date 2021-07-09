/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type useSubscriptionFragment$ref = any;
export type useSubscriptionsPagination$ref = any;
export type useSubscriptionsPagination = {
    readonly subscriptions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": useSubscriptionFragment$ref;
            } | null;
        } | null> | null;
    };
    readonly " $refType": useSubscriptionsPagination$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSubscriptionsPagination",
    "type": "NotificationsSettings",
    "metadata": {
        "connection": [
            {
                "count": "count",
                "cursor": "after",
                "direction": "forward",
                "path": [
                    "subscriptions"
                ]
            }
        ]
    },
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "count",
            "type": "Int"
        },
        {
            "kind": "RootArgument",
            "name": "after",
            "type": "String"
        }
    ],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": "subscriptions",
            "name": "__Notifications_subscriptions_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "NotificationSubscriptionConnection",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NotificationSubscriptionConnectionEdge",
                    "plural": true,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NotificationSubscription",
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
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "__typename",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "useSubscriptionFragment",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "cursor",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "endCursor",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "hasNextPage",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'a833f72b1c3d8233aade5c28f982c1d2';
export default node;
