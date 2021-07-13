/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSettingsQueryVariables = {};
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
query useSettingsQuery {
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
    ...useSubscriptionsListFragment
  }
}

fragment useSubscriptionFragment on NotificationSubscription {
  id
  userAgent
  userDeviceType
}

fragment useSubscriptionsListFragment on NotificationsSettings {
  subscriptions {
    id
    ...useSubscriptionFragment
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [],
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
            "argumentDefinitions": [],
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
                                (v0 /*: any*/),
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
                                    "args": null,
                                    "concreteType": "NotificationSubscription",
                                    "kind": "LinkedField",
                                    "name": "subscriptions",
                                    "plural": true,
                                    "selections": [
                                        (v0 /*: any*/),
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
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        (v0 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "13d622fec632be4fd71ffbe43319ad2b",
            "id": null,
            "metadata": {},
            "name": "useSettingsQuery",
            "operationKind": "query",
            "text": "query useSettingsQuery {\n  settings {\n    ...useSettingsFragment\n    id\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n\nfragment useNotificationsTypesFragment on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n\nfragment useSettingsFragment on Settings {\n  ownerId\n  notifications {\n    id\n    general {\n      ...useNotificationsGeneralFragment\n    }\n    types {\n      ...useNotificationsTypesFragment\n    }\n    ...useSubscriptionsListFragment\n  }\n}\n\nfragment useSubscriptionFragment on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n\nfragment useSubscriptionsListFragment on NotificationsSettings {\n  subscriptions {\n    id\n    ...useSubscriptionFragment\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '60d4453e7cb5db3018d566f286329fd1';
export default node;
