/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskTypeEnum = "EVENT" | "MEETING" | "ROUTINE" | "TODO";
export type updateTaskListTaskTypeFilterSettingMutationInput = {
    readonly taskType: ReadonlyArray<TaskTypeEnum>;
    readonly clientMutationId?: string | null;
};
export type updateTaskListTaskTypeFilterSettingMutationVariables = {
    readonly input: updateTaskListTaskTypeFilterSettingMutationInput;
};
export type updateTaskListTaskTypeFilterSettingMutationResponse = {
    readonly updateTaskListTaskTypeFilterSetting: ({
        readonly clientMutationId: string | null;
        readonly taskType: ReadonlyArray<TaskTypeEnum>;
    }) | null;
};
export type updateTaskListTaskTypeFilterSettingMutation = {
    readonly response: updateTaskListTaskTypeFilterSettingMutationResponse;
    readonly variables: updateTaskListTaskTypeFilterSettingMutationVariables;
};



/*
mutation updateTaskListTaskTypeFilterSettingMutation(
  $input: updateTaskListTaskTypeFilterSettingMutationInput!
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
            "type": "updateTaskListTaskTypeFilterSettingMutationInput!",
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
                    "variableName": "input",
                    "type": "updateTaskListTaskTypeFilterSettingMutationInput!"
                }
            ],
            "concreteType": "updateTaskListTaskTypeFilterSettingMutationPayload",
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
            "type": "MutationType",
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
            "text": "mutation updateTaskListTaskTypeFilterSettingMutation(\n  $input: updateTaskListTaskTypeFilterSettingMutationInput!\n) {\n  updateTaskListTaskTypeFilterSetting(input: $input) {\n    clientMutationId\n    taskType\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0ccf099efab74163f70e11d75f7ddee3';
export default node;
