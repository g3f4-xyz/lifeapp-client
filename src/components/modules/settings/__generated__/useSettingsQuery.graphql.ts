/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSettingsQueryVariables = {
    count: number;
    after?: string | null;
};
export type useSettingsQueryResponse = {
    readonly settings: {
        readonly " $fragmentRefs": FragmentRefs<"useSettingsFragment">;
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
    ...useSettingsFragment
    id
  }
}

fragment useNotificationsGeneralFragment on GeneralNotificationsSettings {
  show
  vibrate
}

fragment useNotificationsTypesFragment on TypesNotificationsSettings {
  events
  goals
  meetings
  routines
  todos
}

fragment useSettingsFragment on Settings {
  ownerId
  notifications {
    id
    general {
      ...useNotificationsGeneralFragment
    }
    types {
      ...useNotificationsTypesFragment
    }
    ...useSubscriptionsPagination
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
    } as any, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v3 = [
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
    ];
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "useSettingsQuery",
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
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useSettingsFragment"
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
            "name": "useSettingsQuery",
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
                            "kind": "ScalarField",
                            "name": "ownerId",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "NotificationsSettings",
                            "kind": "LinkedField",
                            "name": "notifications",
                            "plural": false,
                            "selections": [
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "GeneralNotificationsSettings",
                                    "kind": "LinkedField",
                                    "name": "general",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "show",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "vibrate",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "TypesNotificationsSettings",
                                    "kind": "LinkedField",
                                    "name": "types",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "events",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "goals",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "meetings",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "routines",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "todos",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": (v3 /*: any*/),
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
                                                        (v2 /*: any*/),
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
                                    "args": (v3 /*: any*/),
                                    "filters": null,
                                    "handle": "connection",
                                    "key": "Notifications_subscriptions",
                                    "kind": "LinkedHandle",
                                    "name": "subscriptions"
                                }
                            ],
                            "storageKey": null
                        },
                        (v2 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "c0fc426d8165840da43f2461b1ce0fba",
            "id": null,
            "metadata": {},
            "name": "useSettingsQuery",
            "operationKind": "query",
            "text": "query useSettingsQuery(\n  $count: Int!\n  $after: String\n) {\n  settings {\n    ...useSettingsFragment\n    id\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n\nfragment useNotificationsTypesFragment on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n\nfragment useSettingsFragment on Settings {\n  ownerId\n  notifications {\n    id\n    general {\n      ...useNotificationsGeneralFragment\n    }\n    types {\n      ...useNotificationsTypesFragment\n    }\n    ...useSubscriptionsPagination\n  }\n}\n\nfragment useSubscriptionFragment on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n\nfragment useSubscriptionsPagination on NotificationsSettings {\n  subscriptions(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...useSubscriptionFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9b8cceaa9c872ef3b8db5a213fa03254';
export default node;
