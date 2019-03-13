/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type updateTaskListTitleFilterSettingMutationInput = {
    readonly title?: string | null;
    readonly clientMutationId?: string | null;
};
export type updateTaskListTitleFilterSettingMutationVariables = {
    readonly input: updateTaskListTitleFilterSettingMutationInput;
};
export type updateTaskListTitleFilterSettingMutationResponse = {
    readonly updateTaskListTitleFilterSetting: ({
        readonly clientMutationId: string | null;
        readonly title: string | null;
    }) | null;
};
export type updateTaskListTitleFilterSettingMutation = {
    readonly response: updateTaskListTitleFilterSettingMutationResponse;
    readonly variables: updateTaskListTitleFilterSettingMutationVariables;
};



/*
mutation updateTaskListTitleFilterSettingMutation(
  $input: updateTaskListTitleFilterSettingMutationInput!
) {
  updateTaskListTitleFilterSetting(input: $input) {
    clientMutationId
    title
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskListTitleFilterSettingMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskListTitleFilterSetting",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskListTitleFilterSettingMutationInput!"
                }
            ],
            "concreteType": "updateTaskListTitleFilterSettingMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "clientMutationId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskListTitleFilterSettingMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskListTitleFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskListTitleFilterSettingMutation",
            "id": null,
            "text": "mutation updateTaskListTitleFilterSettingMutation(\n  $input: updateTaskListTitleFilterSettingMutationInput!\n) {\n  updateTaskListTitleFilterSetting(input: $input) {\n    clientMutationId\n    title\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'e93475e37e1506012b4ef0257980fe6f';
export default node;
