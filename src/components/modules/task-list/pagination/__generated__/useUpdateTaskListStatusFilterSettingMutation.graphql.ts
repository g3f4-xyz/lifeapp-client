/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO" | "%future added value";
export type UpdateTaskListStatusFilterSettingInput = {
    clientMutationId?: string | null;
    status?: TaskStatus | null;
};
export type useUpdateTaskListStatusFilterSettingMutationVariables = {
    input: UpdateTaskListStatusFilterSettingInput;
};
export type useUpdateTaskListStatusFilterSettingMutationResponse = {
    readonly updateTaskListStatusFilterSetting: {
        readonly clientMutationId: string | null;
        readonly status: TaskStatus | null;
    };
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
    status
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
            "concreteType": "UpdateTaskListStatusFilterSettingOutput",
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
                    "name": "status",
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
            "cacheID": "1d9653e5435c3e741c6f3adca77828b4",
            "id": null,
            "metadata": {},
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useUpdateTaskListStatusFilterSettingMutation(\n  $input: UpdateTaskListStatusFilterSettingInput!\n) {\n  updateTaskListStatusFilterSetting(input: $input) {\n    clientMutationId\n    status\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'fccb693d175f1bd65e1245e7b3c8dd41';
export default node;
