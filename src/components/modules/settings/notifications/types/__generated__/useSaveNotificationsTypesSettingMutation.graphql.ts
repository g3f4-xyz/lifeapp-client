/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SaveNotificationsTypesSettingInput = {
    clientMutationId?: string | null;
    types?: SaveNotificationsTypesSettingTypesInput | null;
};
export type SaveNotificationsTypesSettingTypesInput = {
    goals: boolean;
    todos: boolean;
    meetings: boolean;
    events: boolean;
    routines: boolean;
};
export type useSaveNotificationsTypesSettingMutationVariables = {
    input: SaveNotificationsTypesSettingInput;
};
export type useSaveNotificationsTypesSettingMutationResponse = {
    readonly saveNotificationsTypesSetting: {
        readonly savedTypes: {
            readonly " $fragmentRefs": FragmentRefs<"useNotificationsTypesFragment">;
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
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useSaveNotificationsTypesSettingMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsTypesSettingOutput",
                    "kind": "LinkedField",
                    "name": "saveNotificationsTypesSetting",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "TypesNotificationsSettings",
                            "kind": "LinkedField",
                            "name": "savedTypes",
                            "plural": false,
                            "selections": [
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "useNotificationsTypesFragment"
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useSaveNotificationsTypesSettingMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsTypesSettingOutput",
                    "kind": "LinkedField",
                    "name": "saveNotificationsTypesSetting",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "TypesNotificationsSettings",
                            "kind": "LinkedField",
                            "name": "savedTypes",
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
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "4e73ecd79faf55b9e27438b3066ba11d",
            "id": null,
            "metadata": {},
            "name": "useSaveNotificationsTypesSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useSaveNotificationsTypesSettingMutation(\n  $input: SaveNotificationsTypesSettingInput!\n) {\n  saveNotificationsTypesSetting(input: $input) {\n    savedTypes {\n      ...useNotificationsTypesFragment\n    }\n  }\n}\n\nfragment useNotificationsTypesFragment on TypesNotificationsSettings {\n  events\n  goals\n  meetings\n  routines\n  todos\n}\n"
        }
    } as any;
})();
(node as any).hash = '4bc57d6bc766747d551b834a633c4f0f';
export default node;
