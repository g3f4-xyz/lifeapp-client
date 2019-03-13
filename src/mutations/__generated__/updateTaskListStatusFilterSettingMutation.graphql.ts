/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskStatusEnum = "DONE" | "IN_PROGRESS" | "TODO";
export type updateTaskListStatusFilterSettingMutationInput = {
    readonly status?: TaskStatusEnum | null;
    readonly clientMutationId?: string | null;
};
export type updateTaskListStatusFilterSettingMutationVariables = {
    readonly input: updateTaskListStatusFilterSettingMutationInput;
};
export type updateTaskListStatusFilterSettingMutationResponse = {
    readonly updateTaskListStatusFilterSetting: ({
        readonly clientMutationId: string | null;
        readonly status: TaskStatusEnum | null;
    }) | null;
};
export type updateTaskListStatusFilterSettingMutation = {
    readonly response: updateTaskListStatusFilterSettingMutationResponse;
    readonly variables: updateTaskListStatusFilterSettingMutationVariables;
};



/*
mutation updateTaskListStatusFilterSettingMutation(
  $input: updateTaskListStatusFilterSettingMutationInput!
) {
  updateTaskListStatusFilterSetting(input: $input) {
    clientMutationId
    status
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskListStatusFilterSettingMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskListStatusFilterSetting",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskListStatusFilterSettingMutationInput!"
                }
            ],
            "concreteType": "updateTaskListStatusFilterSettingMutationPayload",
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
                    "name": "status",
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
            "name": "updateTaskListStatusFilterSettingMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskListStatusFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskListStatusFilterSettingMutation",
            "id": null,
            "text": "mutation updateTaskListStatusFilterSettingMutation(\n  $input: updateTaskListStatusFilterSettingMutationInput!\n) {\n  updateTaskListStatusFilterSetting(input: $input) {\n    clientMutationId\n    status\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '146bfff7bee283afb2942d20c8629f8c';
export default node;
