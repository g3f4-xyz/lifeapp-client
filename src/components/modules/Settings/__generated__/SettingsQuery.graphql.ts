/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SettingsFragment$ref = any;
export type SettingsQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type SettingsQueryResponse = {
    readonly app: {
        readonly settings: {
            readonly id: string;
            readonly " $fragmentRefs": SettingsFragment$ref;
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
      ...SettingsFragment
    }
    id
  }
}

fragment SettingsFragment on SettingsType {
  id
  ownerId
  notifications {
    id
    general {
      ...NotificationsGeneralFragment
      id
    }
    types {
      ...NotificationsTypesFragment
      id
    }
    ...SubscriptionsPagination
  }
}

fragment NotificationsGeneralFragment on NotificationsGeneralSettingType {
  show
  vibrate
}

fragment NotificationsTypesFragment on NotificationsTypesSettingType {
  events
  goals
  meetings
  routines
  todos
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
                                    "name": "SettingsFragment",
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
                                                },
                                                (v1 /*: any*/)
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
                                                },
                                                (v1 /*: any*/)
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
            "text": "query SettingsQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    settings {\n      id\n      ...SettingsFragment\n    }\n    id\n  }\n}\n\nfragment SettingsFragment on SettingsType {\n  id\n  ownerId\n  notifications {\n    id\n    general {\n      ...NotificationsGeneralFragment\n      id\n    }\n    types {\n      ...NotificationsTypesFragment\n      id\n    }\n    ...SubscriptionsPagination\n  }\n}\n\nfragment NotificationsGeneralFragment on NotificationsGeneralSettingType {\n  show\n  vibrate\n}\n\nfragment NotificationsTypesFragment on NotificationsTypesSettingType {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n\nfragment SubscriptionsPagination on NotificationsType {\n  id\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...SubscriptionFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SubscriptionFragment on SubscriptionType {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3b9fe9a7880e5b54be2987c5237ccd70';
export default node;
