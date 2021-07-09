/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useNotificationsTypesFragment$ref = any;
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
export type useSaveNotificationsTypesSettingMutationVariables = {
    readonly input: SaveNotificationsTypesSettingInput;
};
export type useSaveNotificationsTypesSettingMutationResponse = {
    readonly saveNotificationsTypesSetting: {
        readonly savedTypes: {
            readonly " $fragmentRefs": useNotificationsTypesFragment$ref;
        } | null;
    };
};
export type useSaveNotificationsTypesSettingMutation = {
    readonly response: useSaveNotificationsTypesSettingMutationResponse;
    readonly variables: useSaveNotificationsTypesSettingMutationVariables;
};



/*
mutation useSaveNotificationsTypesSettingMutation(
  $input: SaveNotificationsTypesSettingInput!
) {
  saveNotificationsTypesSetting(input: $input) {
    savedTypes {
      ...useNotificationsTypesFragment
    }
  }
}

fragment useNotificationsTypesFragment on TypesNotificationsSettings {
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
            "name": "useSaveNotificationsTypesSettingMutation",
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
                                    "name": "useNotificationsTypesFragment",
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
            "name": "useSaveNotificationsTypesSettingMutation",
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
            "name": "useSaveNotificationsTypesSettingMutation",
            "id": null,
            "text": "mutation useSaveNotificationsTypesSettingMutation(\n  $input: SaveNotificationsTypesSettingInput!\n) {\n  saveNotificationsTypesSetting(input: $input) {\n    savedTypes {\n      ...useNotificationsTypesFragment\n    }\n  }\n}\n\nfragment useNotificationsTypesFragment on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '4bc57d6bc766747d551b834a633c4f0f';
export default node;
