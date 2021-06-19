/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type UpdateTaskListTaskTypeFilterSettingInput = {
    readonly clientMutationId?: string | null;
    readonly taskType?: ReadonlyArray<TaskTypeId | null> | null;
};
export type updateTaskListTaskTypeFilterSettingMutationVariables = {
    readonly input: UpdateTaskListTaskTypeFilterSettingInput;
};
export type updateTaskListTaskTypeFilterSettingMutationResponse = {
    readonly updateTaskListTaskTypeFilterSetting: {
        readonly clientMutationId: string | null;
        readonly taskType: ReadonlyArray<TaskTypeId | null> | null;
    };
};
export type updateTaskListTaskTypeFilterSettingMutation = {
    readonly response: updateTaskListTaskTypeFilterSettingMutationResponse;
    readonly variables: updateTaskListTaskTypeFilterSettingMutationVariables;
};



/*
mutation updateTaskListTaskTypeFilterSettingMutation(
  $input: UpdateTaskListTaskTypeFilterSettingInput!
) {
  updateTaskListTaskTypeFilterSetting(input: $input) {
    clientMutationId
    taskType
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "UpdateTaskListTaskTypeFilterSettingInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskListTaskTypeFilterSetting",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "UpdateTaskListTaskTypeFilterSettingOutput",
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
                    "name": "taskType",
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
            "name": "updateTaskListTaskTypeFilterSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskListTaskTypeFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskListTaskTypeFilterSettingMutation",
            "id": null,
            "text": "mutation updateTaskListTaskTypeFilterSettingMutation(\n  $input: UpdateTaskListTaskTypeFilterSettingInput!\n) {\n  updateTaskListTaskTypeFilterSetting(input: $input) {\n    clientMutationId\n    taskType\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '9d3cf3bbc80677c784219cb82743cc7e';
export default node;
