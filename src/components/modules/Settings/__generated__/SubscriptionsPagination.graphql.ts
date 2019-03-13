/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type SubscriptionFragment$ref = any;
export type SubscriptionsPagination$ref = any;
export type SubscriptionsPagination = {
    readonly id: string;
    readonly subscriptions: {
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly " $fragmentRefs": SubscriptionFragment$ref;
            }) | null;
        }) | null> | null;
    };
    readonly " $refType": SubscriptionsPagination$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "SubscriptionsPagination",
        "type": "NotificationsType",
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
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": "subscriptions",
                "name": "__Notifications_subscriptions_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "SubscriptionTypeConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SubscriptionTypeEdge",
                        "plural": true,
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SubscriptionType",
                                "plural": false,
                                "selections": [
                                    (v0 /*: any*/),
                                    {
                                        "kind": "FragmentSpread",
                                        "name": "SubscriptionFragment",
                                        "args": null
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "__typename",
                                        "args": null,
                                        "storageKey": null
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
    } as any;
})();
(node as any).hash = '540d2ac5e160a06280dc9af037c931eb';
export default node;
