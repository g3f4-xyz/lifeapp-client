/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskListTitleFilterSettingInput = {
    readonly clientMutationId?: string | null;
    readonly title?: string | null;
};
export type updateTaskListTitleFilterSettingMutationVariables = {
    readonly input: UpdateTaskListTitleFilterSettingInput;
};
export type updateTaskListTitleFilterSettingMutationResponse = {
    readonly updateTaskListTitleFilterSetting: {
        readonly clientMutationId: string | null;
        readonly title: string | null;
    };
};
export type updateTaskListTitleFilterSettingMutation = {
    readonly response: updateTaskListTitleFilterSettingMutationResponse;
    readonly variables: updateTaskListTitleFilterSettingMutationVariables;
};



/*
mutation updateTaskListTitleFilterSettingMutation(
  $input: UpdateTaskListTitleFilterSettingInput!
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
            "type": "UpdateTaskListTitleFilterSettingInput!",
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
                    "variableName": "input"
                }
            ],
            "concreteType": "UpdateTaskListTitleFilterSettingOutput",
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
            "type": "Mutation",
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
            "text": "mutation updateTaskListTitleFilterSettingMutation(\n  $input: UpdateTaskListTitleFilterSettingInput!\n) {\n  updateTaskListTitleFilterSetting(input: $input) {\n    clientMutationId\n    title\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'c05635b4a432bb2e8da8e9e834be0eae';
export default node;
