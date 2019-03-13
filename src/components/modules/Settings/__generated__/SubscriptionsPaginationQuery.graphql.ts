/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SubscriptionsPagination$ref = any;
export type SubscriptionsPaginationQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type SubscriptionsPaginationQueryResponse = {
    readonly app: {
        readonly settings: {
            readonly notifications: {
                readonly " $fragmentRefs": SubscriptionsPagination$ref;
            };
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
  app {
    settings {
      notifications {
        ...SubscriptionsPagination
        id
      }
      id
    }
    id
  }
}

fragment SubscriptionsPagination on NotificationsType {
  id
  subscriptions(first: $count, after: $after) {
    edges {
      node {
        id
        ...SubscriptionFragment
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

fragment SubscriptionFragment on SubscriptionType {
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
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "SubscriptionsPaginationQuery",
            "type": "QueryType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "settings",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SettingsType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "notifications",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "NotificationsType",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "FragmentSpread",
                                            "name": "SubscriptionsPagination",
                                            "args": null
                                        }
                                    ]
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
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "settings",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SettingsType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "notifications",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "NotificationsType",
                                    "plural": false,
                                    "selections": [
                                        (v1 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "subscriptions",
                                            "storageKey": null,
                                            "args": (v2 /*: any*/),
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
                                                                (v1 /*: any*/),
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
                                            "args": (v2 /*: any*/),
                                            "handle": "connection",
                                            "key": "Notifications_subscriptions",
                                            "filters": null
                                        }
                                    ]
                                },
                                (v1 /*: any*/)
                            ]
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "SubscriptionsPaginationQuery",
            "id": null,
            "text": "query SubscriptionsPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    settings {\n      notifications {\n        ...SubscriptionsPagination\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment SubscriptionsPagination on NotificationsType {\n  id\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...SubscriptionFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SubscriptionFragment on SubscriptionType {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '4a9c09295fe76b029ddaee9b3b30e9ab';
export default node;
