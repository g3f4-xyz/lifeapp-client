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

fragment useNotificationsTaskTypesFragment on NotificationsSettings {
  types {
    taskTypeId
    enabled
  }
}

fragment useSettingsFragment on Settings {
  ownerId
  notifications {
    id
    general {
      ...useNotificationsGeneralFragment
    }
    ...useNotificationsTaskTypesFragment
    ...useSubscriptionListFragment
  }
}

fragment useSubscriptionListFragment on NotificationsSettings {
  subscriptions {
    id
    ...useSubscriptionListItemFragment
  }
}

fragment useSubscriptionListItemFragment on NotificationSubscription {
  id
  userAgent
  userDeviceType
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
                                    "concreteType": "NotificationsSettingsTaskTypes",
                                    "kind": "LinkedField",
                                    "name": "types",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "taskTypeId",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "enabled",
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
            "cacheID": "5c7a5701dc4c10f99ef6c0be32288e70",
            "id": null,
            "metadata": {},
            "name": "useSettingsQuery",
            "operationKind": "query",
            "text": "query useSettingsQuery {\n  settings {\n    ...useSettingsFragment\n    id\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n\nfragment useNotificationsTaskTypesFragment on NotificationsSettings {\n  types {\n    taskTypeId\n    enabled\n  }\n}\n\nfragment useSettingsFragment on Settings {\n  ownerId\n  notifications {\n    id\n    general {\n      ...useNotificationsGeneralFragment\n    }\n    ...useNotificationsTaskTypesFragment\n    ...useSubscriptionListFragment\n  }\n}\n\nfragment useSubscriptionListFragment on NotificationsSettings {\n  subscriptions {\n    id\n    ...useSubscriptionListItemFragment\n  }\n}\n\nfragment useSubscriptionListItemFragment on NotificationSubscription {\n  id\n  userAgent\n  userDeviceType\n}\n"
        }
    } as any;
})();
(node as any).hash = '60d4453e7cb5db3018d566f286329fd1';
export default node;
