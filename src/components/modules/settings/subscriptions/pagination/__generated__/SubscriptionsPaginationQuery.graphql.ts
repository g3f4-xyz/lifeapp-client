/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SubscriptionsPagination_data$ref = any;
export type SubscriptionsPaginationQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type SubscriptionsPaginationQueryResponse = {
    readonly app: {
        readonly settings: {
            readonly notifications: {
                readonly " $fragmentRefs": SubscriptionsPagination_data$ref;
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
        ...SubscriptionsPagination_data
        id
      }
      id
    }
    id
  }
}

fragment SubscriptionsPagination_data on NotificationsType {
  subscriptions(first: $count, after: $after) {
    edges {
      node {
        id
        ...SubscriptionFragment_data
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

fragment SubscriptionFragment_data on SubscriptionType {
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
                                            "name": "SubscriptionsPagination_data",
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
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "subscriptions",
                                            "storageKey": null,
                                            "args": (v1 /*: any*/),
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
            "text": "query SubscriptionsPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    settings {\n      notifications {\n        ...SubscriptionsPagination_data\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment SubscriptionsPagination_data on NotificationsType {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...SubscriptionFragment_data\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SubscriptionFragment_data on SubscriptionType {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'c621ee82e7cb8431db5296306a43e62c';
export default node;
