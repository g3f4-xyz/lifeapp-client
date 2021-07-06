/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type SettingsFragment_data$ref = any;
export type useSettingsQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useSettingsQueryResponse = {
    readonly settings: {
        readonly " $fragmentRefs": SettingsFragment_data$ref;
    };
};
export type useSettingsQuery = {
    readonly response: useSettingsQueryResponse;
    readonly variables: useSettingsQueryVariables;
};



/*
query useSettingsQuery(
  $count: Int!
  $after: String
) {
  settings {
    ...SettingsFragment_data
    id
  }
}

fragment SettingsFragment_data on Settings {
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

fragment NotificationsGeneralFragment_data on GeneralNotificationsSettings {
  show
  vibrate
}

fragment NotificationsTypesFragment_data on TypesNotificationsSettings {
  events
  goals
  meetings
  routines
  todos
}

fragment SubscriptionsPagination_data on NotificationsSettings {
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

fragment SubscriptionFragment_data on NotificationSubscription {
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
            "name": "useSettingsQuery",
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
                            "kind": "FragmentSpread",
                            "name": "SettingsFragment_data",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "useSettingsQuery",
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
                                (v1 /*: any*/),
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
                                    "concreteType": "TypesNotificationsSettings",
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
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useSettingsQuery",
            "id": null,
            "text": "query useSettingsQuery(\n  $count: Int!\n  $after: String\n) {\n  settings {\n    ...SettingsFragment_data\n    id\n  }\n}\n\nfragment SettingsFragment_data on Settings {\n  ownerId\n  notifications {\n    id\n    general {\n      ...NotificationsGeneralFragment_data\n    }\n    types {\n      ...NotificationsTypesFragment_data\n    }\n    ...SubscriptionsPagination_data\n  }\n}\n\nfragment NotificationsGeneralFragment_data on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n\nfragment NotificationsTypesFragment_data on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n\nfragment SubscriptionsPagination_data on NotificationsSettings {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...SubscriptionFragment_data\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SubscriptionFragment_data on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'bc351913000b7517d5664295dac23cf9';
export default node;
