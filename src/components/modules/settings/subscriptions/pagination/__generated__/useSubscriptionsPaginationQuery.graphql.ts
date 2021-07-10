/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionsPaginationQueryVariables = {
    count: number;
    after?: string | null;
};
export type useSubscriptionsPaginationQueryResponse = {
    readonly settings: {
        readonly notifications: {
            readonly " $fragmentRefs": FragmentRefs<"useSubscriptionsPagination">;
        };
    };
};
export type useSubscriptionsPaginationQuery = {
    readonly response: useSubscriptionsPaginationQueryResponse;
    readonly variables: useSubscriptionsPaginationQueryVariables;
};



/*
query useSubscriptionsPaginationQuery(
  $count: Int!
  $after: String
) {
  settings {
    notifications {
      ...useSubscriptionsPagination
      id
    }
    id
  }
}

fragment useSubscriptionFragment on NotificationSubscription {
  id
  userAgent
  userDeviceType
}

fragment useSubscriptionsPagination on NotificationsSettings {
  subscriptions(first: $count, after: $after) {
    edges {
      node {
        id
        ...useSubscriptionFragment
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "after"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "count"
    } as any, v2 = [
        {
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any,
        {
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "useSubscriptionsPaginationQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Settings",
                    "kind": "LinkedField",
                    "name": "settings",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "NotificationsSettings",
                            "kind": "LinkedField",
                            "name": "notifications",
                            "plural": false,
                            "selections": [
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "useSubscriptionsPagination"
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "useSubscriptionsPaginationQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Settings",
                    "kind": "LinkedField",
                    "name": "settings",
                    "plural": false,
                    "selections": [
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
                                    "args": (v2 /*: any*/),
                                    "concreteType": "NotificationSubscriptionConnection",
                                    "kind": "LinkedField",
                                    "name": "subscriptions",
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
                                                        (v3 /*: any*/),
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "userAgent",
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "userDeviceType",
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "__typename",
                                                            "storageKey": null
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
                                },
                                {
                                    "alias": null,
                                    "args": (v2 /*: any*/),
                                    "filters": null,
                                    "handle": "connection",
                                    "key": "Notifications_subscriptions",
                                    "kind": "LinkedHandle",
                                    "name": "subscriptions"
                                },
                                (v3 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v3 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "834a81de3149134e2475a48499d3a556",
            "id": null,
            "metadata": {},
            "name": "useSubscriptionsPaginationQuery",
            "operationKind": "query",
            "text": "query useSubscriptionsPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  settings {\n    notifications {\n      ...useSubscriptionsPagination\n      id\n    }\n    id\n  }\n}\n\nfragment useSubscriptionFragment on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n\nfragment useSubscriptionsPagination on NotificationsSettings {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...useSubscriptionFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'fba9a96b39b91c837269d29cf95003d3';
export default node;
