/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO";
export type UpdateTaskListStatusFilterSettingInput = {
    taskStatus: Array<TaskStatus>;
    clientMutationId?: string | null;
};
export type useUpdateTaskListStatusFilterSettingMutationVariables = {
    input: UpdateTaskListStatusFilterSettingInput;
};
export type useUpdateTaskListStatusFilterSettingMutationResponse = {
    readonly updateTaskListStatusFilterSetting: {
        readonly clientMutationId: string | null;
        readonly taskStatus: ReadonlyArray<TaskStatus>;
    } | null;
};
export type useUpdateTaskListStatusFilterSettingMutation = {
    readonly response: useUpdateTaskListStatusFilterSettingMutationResponse;
    readonly variables: useUpdateTaskListStatusFilterSettingMutationVariables;
};



/*
mutation useUpdateTaskListStatusFilterSettingMutation(
  $input: UpdateTaskListStatusFilterSettingInput!
) {
  updateTaskListStatusFilterSetting(input: $input) {
    clientMutationId
    taskStatus
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
            "concreteType": "UpdateTaskListStatusFilterSettingPayload",
            "kind": "LinkedField",
            "name": "updateTaskListStatusFilterSetting",
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
                    "name": "taskStatus",
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
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "3d94f2c69b12b5cba85f93bd730c408f",
            "id": null,
            "metadata": {},
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useUpdateTaskListStatusFilterSettingMutation(\n  $input: UpdateTaskListStatusFilterSettingInput!\n) {\n  updateTaskListStatusFilterSetting(input: $input) {\n    clientMutationId\n    taskStatus\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'a77cfc1da01b5ac80576587b6f053e59';
export default node;
