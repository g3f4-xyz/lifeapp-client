/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SubscriptionsPagination_data$ref = any;
export type SubscriptionsPaginationQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type SubscriptionsPaginationQueryResponse = {
    readonly settings: {
        readonly notifications: {
            readonly " $fragmentRefs": SubscriptionsPagination_data$ref;
        };
    };
};
export type SubscriptionsPaginationQuery = {
    readonly response: SubscriptionsPaginationQueryResponse;
    readonly variables: SubscriptionsPaginationQueryVariables;
};



/*
query SubscriptionsPaginationQuery(
  $count: Int!
  $after: String
) {
  settings {
    notifications {
      ...SubscriptionsPagination_data
      id
    }
    id
  }
}

fragment SubscriptionsPagination_data on NotificationsSettings {
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

fragment useSubscriptionFragment on NotificationSubscription {
  id
  userAgent
  userDeviceType
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "count",
            "type": "Int!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "SubscriptionsPaginationQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "settings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Settings",
                    "plural": false,
                    "selections": [
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
                                    "kind": "FragmentSpread",
                                    "name": "SubscriptionsPagination_data",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "SubscriptionsPaginationQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "settings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Settings",
                    "plural": false,
                    "selections": [
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
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "subscriptions",
                                    "storageKey": null,
                                    "args": (v1 /*: any*/),
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
                                                        (v2 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "userAgent",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "userDeviceType",
                                                            "args": null,
                                                            "storageKey": null
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
                                },
                                {
                                    "kind": "LinkedHandle",
                                    "alias": null,
                                    "name": "subscriptions",
                                    "args": (v1 /*: any*/),
                                    "handle": "connection",
                                    "key": "Notifications_subscriptions",
                                    "filters": null
                                },
                                (v2 /*: any*/)
                            ]
                        },
                        (v2 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "SubscriptionsPaginationQuery",
            "id": null,
            "text": "query SubscriptionsPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  settings {\n    notifications {\n      ...SubscriptionsPagination_data\n      id\n    }\n    id\n  }\n}\n\nfragment SubscriptionsPagination_data on NotificationsSettings {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...useSubscriptionFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useSubscriptionFragment on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a9a242e0a4f993d343c1294200996ee1';
export default node;
