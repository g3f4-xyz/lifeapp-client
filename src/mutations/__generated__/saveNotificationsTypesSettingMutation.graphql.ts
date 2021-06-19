/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NotificationsTypesFragment_data$ref = any;
export type SaveNotificationsTypesSettingInput = {
    readonly clientMutationId?: string | null;
    readonly types?: SaveNotificationsTypesSettingTypesInput | null;
};
export type SaveNotificationsTypesSettingTypesInput = {
    readonly goals: boolean;
    readonly todos: boolean;
    readonly meetings: boolean;
    readonly events: boolean;
    readonly routines: boolean;
};
export type saveNotificationsTypesSettingMutationVariables = {
    readonly input: SaveNotificationsTypesSettingInput;
};
export type saveNotificationsTypesSettingMutationResponse = {
    readonly saveNotificationsTypesSetting: {
        readonly savedTypes: {
            readonly " $fragmentRefs": NotificationsTypesFragment_data$ref;
        } | null;
    };
};
export type saveNotificationsTypesSettingMutation = {
    readonly response: saveNotificationsTypesSettingMutationResponse;
    readonly variables: saveNotificationsTypesSettingMutationVariables;
};



/*
mutation saveNotificationsTypesSettingMutation(
  $input: SaveNotificationsTypesSettingInput!
) {
  saveNotificationsTypesSetting(input: $input) {
    savedTypes {
      ...NotificationsTypesFragment_data
    }
  }
}

fragment NotificationsTypesFragment_data on TypesNotificationsSettings {
  events
  goals
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
            "type": "SaveNotificationsTypesSettingInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "saveNotificationsTypesSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsTypesSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsTypesSettingOutput",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedTypes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TypesNotificationsSettings",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "NotificationsTypesFragment_data",
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
                    "concreteType": "SaveNotificationsTypesSettingOutput",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedTypes",
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
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "saveNotificationsTypesSettingMutation",
            "id": null,
            "text": "mutation saveNotificationsTypesSettingMutation(\n  $input: SaveNotificationsTypesSettingInput!\n) {\n  saveNotificationsTypesSetting(input: $input) {\n    savedTypes {\n      ...NotificationsTypesFragment_data\n    }\n  }\n}\n\nfragment NotificationsTypesFragment_data on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'fa4836ad87b3581145b3ecee5d9049ee';
export default node;
