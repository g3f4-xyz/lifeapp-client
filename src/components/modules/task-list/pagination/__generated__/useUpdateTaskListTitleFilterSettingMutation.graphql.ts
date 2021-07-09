/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskListTitleFilterSettingInput = {
    readonly clientMutationId?: string | null;
    readonly title?: string | null;
};
export type useUpdateTaskListTitleFilterSettingMutationVariables = {
    readonly input: UpdateTaskListTitleFilterSettingInput;
};
export type useUpdateTaskListTitleFilterSettingMutationResponse = {
    readonly updateTaskListTitleFilterSetting: {
        readonly clientMutationId: string | null;
        readonly title: string | null;
    };
};
export type useUpdateTaskListTitleFilterSettingMutation = {
    readonly response: useUpdateTaskListTitleFilterSettingMutationResponse;
    readonly variables: useUpdateTaskListTitleFilterSettingMutationVariables;
};



/*
mutation useUpdateTaskListTitleFilterSettingMutation(
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
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "id": null,
            "text": "mutation useUpdateTaskListTitleFilterSettingMutation(\n  $input: UpdateTaskListTitleFilterSettingInput!\n) {\n  updateTaskListTitleFilterSetting(input: $input) {\n    clientMutationId\n    title\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b523952ec4a78b524557525e7b02d4e4';
export default node;
