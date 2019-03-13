/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NotificationsTypesFragment$ref = any;
export type saveNotificationsTypesSettingMutationInput = {
    readonly types?: SettingsNotificationsTypesInputType | null;
    readonly clientMutationId?: string | null;
};
export type SettingsNotificationsTypesInputType = {
    readonly events: boolean;
    readonly meetings: boolean;
    readonly todos: boolean;
    readonly routines: boolean;
};
export type saveNotificationsTypesSettingMutationVariables = {
    readonly input: saveNotificationsTypesSettingMutationInput;
};
export type saveNotificationsTypesSettingMutationResponse = {
    readonly saveNotificationsTypesSetting: ({
        readonly savedTypes: {
            readonly " $fragmentRefs": NotificationsTypesFragment$ref;
        };
    }) | null;
};
export type saveNotificationsTypesSettingMutation = {
    readonly response: saveNotificationsTypesSettingMutationResponse;
    readonly variables: saveNotificationsTypesSettingMutationVariables;
};



/*
mutation saveNotificationsTypesSettingMutation(
  $input: saveNotificationsTypesSettingMutationInput!
) {
  saveNotificationsTypesSetting(input: $input) {
    savedTypes {
      ...NotificationsTypesFragment
      id
    }
  }
}

fragment NotificationsTypesFragment on NotificationsTypesSettingType {
  events
  meetings
  routines
  todos
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "saveNotificationsTypesSettingMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "saveNotificationsTypesSettingMutationInput!"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "saveNotificationsTypesSettingMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsTypesSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "saveNotificationsTypesSettingMutationPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedTypes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NotificationsTypesSettingType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "NotificationsTypesFragment",
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
            "name": "saveNotificationsTypesSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsTypesSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "saveNotificationsTypesSettingMutationPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedTypes",
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
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "saveNotificationsTypesSettingMutation",
            "id": null,
            "text": "mutation saveNotificationsTypesSettingMutation(\n  $input: saveNotificationsTypesSettingMutationInput!\n) {\n  saveNotificationsTypesSetting(input: $input) {\n    savedTypes {\n      ...NotificationsTypesFragment\n      id\n    }\n  }\n}\n\nfragment NotificationsTypesFragment on NotificationsTypesSettingType {\n  events\n  meetings\n  routines\n  todos\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '7f8fdeb140990405a2205883c726f631';
export default node;