/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SettingsFragment_data$ref = any;
export type SettingsQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type SettingsQueryResponse = {
    readonly app: {
        readonly settings: {
            readonly id: string;
            readonly " $fragmentRefs": SettingsFragment_data$ref;
        };
    };
};
export type SettingsQuery = {
    readonly response: SettingsQueryResponse;
    readonly variables: SettingsQueryVariables;
};



/*
query SettingsQuery(
  $count: Int!
  $after: String
) {
  app {
    settings {
      id
      ...SettingsFragment_data
    }
    id
  }
}

fragment SettingsFragment_data on SettingsType {
  id
  ownerId
  notifications {
    id
    general {
      ...NotificationsGeneralFragment_data
    }
    types {
      ...NotificationsTypesFragment_data
    }
    ...SubscriptionsPagination_data
  }
}

fragment NotificationsGeneralFragment_data on NotificationsGeneralSettingType {
  show
  vibrate
}

fragment NotificationsTypesFragment_data on NotificationsTypesSettingType {
  events
  goals
  meetings
  routines
  todos
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
            "variableName": "after"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "SettingsQuery",
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
                                (v1 /*: any*/),
                                {
                                    "kind": "FragmentSpread",
                                    "name": "SettingsFragment_data",
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
            "name": "SettingsQuery",
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
                                (v1 /*: any*/),
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
                                    "concreteType": "NotificationsType",
                                    "plural": false,
                                    "selections": [
                                        (v1 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "general",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "NotificationsGeneralSettingType",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "show",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "vibrate",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "types",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "NotificationsTypesSettingType",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "events",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "goals",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "meetings",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "routines",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "todos",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        },
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
                                }
                            ]
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "SettingsQuery",
            "id": null,
            "text": "query SettingsQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    settings {\n      id\n      ...SettingsFragment_data\n    }\n    id\n  }\n}\n\nfragment SettingsFragment_data on SettingsType {\n  id\n  ownerId\n  notifications {\n    id\n    general {\n      ...NotificationsGeneralFragment_data\n    }\n    types {\n      ...NotificationsTypesFragment_data\n    }\n    ...SubscriptionsPagination_data\n  }\n}\n\nfragment NotificationsGeneralFragment_data on NotificationsGeneralSettingType {\n  show\n  vibrate\n}\n\nfragment NotificationsTypesFragment_data on NotificationsTypesSettingType {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n\nfragment SubscriptionsPagination_data on NotificationsType {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...SubscriptionFragment_data\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SubscriptionFragment_data on SubscriptionType {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '83cacc82c2fc7aa5869f0d1ad5ba377d';
export default node;
