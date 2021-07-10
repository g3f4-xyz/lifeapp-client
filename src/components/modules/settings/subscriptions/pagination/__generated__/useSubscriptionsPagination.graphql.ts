/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionsPagination = {
    readonly subscriptions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"useSubscriptionFragment">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "useSubscriptionsPagination";
};
export type useSubscriptionsPagination$data = useSubscriptionsPagination;
export type useSubscriptionsPagination$key = {
    readonly " $data"?: useSubscriptionsPagination$data;
    readonly " $fragmentRefs": FragmentRefs<"useSubscriptionsPagination">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "after"
        },
        {
            "kind": "RootArgument",
            "name": "count"
        }
    ],
    "kind": "Fragment",
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
    "name": "useSubscriptionsPagination",
    "selections": [
        {
            "alias": "subscriptions",
            "args": null,
            "concreteType": "NotificationSubscriptionConnection",
            "kind": "LinkedField",
            "name": "__Notifications_subscriptions_connection",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "NotificationSubscriptionConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "NotificationSubscription",
                            "kind": "LinkedField",
                            "name": "node",
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
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                },
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "useSubscriptionFragment"
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endCursor",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNextPage",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "NotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = 'a833f72b1c3d8233aade5c28f982c1d2';
export default node;
