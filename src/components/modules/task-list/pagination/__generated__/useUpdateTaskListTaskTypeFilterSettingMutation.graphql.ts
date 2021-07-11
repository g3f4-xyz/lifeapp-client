/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type UpdateTaskListTaskTypeFilterSettingInput = {
    clientMutationId?: string | null;
    taskType?: Array<TaskTypeId | null> | null;
};
export type useUpdateTaskListTaskTypeFilterSettingMutationVariables = {
    input: UpdateTaskListTaskTypeFilterSettingInput;
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
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "UpdateTaskListTaskTypeFilterSettingOutput",
            "kind": "LinkedField",
            "name": "updateTaskListTaskTypeFilterSetting",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clientMutationId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "taskType",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "9c1281d304cd80bde30e931b8d2dfdf2",
            "id": null,
            "metadata": {},
            "name": "useUpdateTaskListTaskTypeFilterSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useUpdateTaskListTaskTypeFilterSettingMutation(\n  $input: UpdateTaskListTaskTypeFilterSettingInput!\n) {\n  updateTaskListTaskTypeFilterSetting(input: $input) {\n    clientMutationId\n    taskType\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '078a3e296dadcd8b0d3f990448086313';
export default node;
