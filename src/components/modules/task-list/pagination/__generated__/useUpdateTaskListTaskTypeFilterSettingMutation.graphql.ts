/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type UpdateTaskListTaskTypeFilterSettingInput = {
    readonly clientMutationId?: string | null;
    readonly taskType?: ReadonlyArray<TaskTypeId | null> | null;
};
export type useUpdateTaskListTaskTypeFilterSettingMutationVariables = {
    readonly input: UpdateTaskListTaskTypeFilterSettingInput;
};
export type useUpdateTaskListTaskTypeFilterSettingMutationResponse = {
    readonly updateTaskListTaskTypeFilterSetting: {
        readonly clientMutationId: string | null;
        readonly taskType: ReadonlyArray<TaskTypeId | null> | null;
    };
};
export type useUpdateTaskListTaskTypeFilterSettingMutation = {
    readonly response: useUpdateTaskListTaskTypeFilterSettingMutationResponse;
    readonly variables: useUpdateTaskListTaskTypeFilterSettingMutationVariables;
};



/*
mutation useUpdateTaskListTaskTypeFilterSettingMutation(
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
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "id": null,
            "text": "mutation useUpdateTaskListTaskTypeFilterSettingMutation(\n  $input: UpdateTaskListTaskTypeFilterSettingInput!\n) {\n  updateTaskListTaskTypeFilterSetting(input: $input) {\n    clientMutationId\n    taskType\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '078a3e296dadcd8b0d3f990448086313';
export default node;
