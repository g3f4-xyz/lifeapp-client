/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO" | "%future added value";
export type UpdateTaskListStatusFilterSettingInput = {
    readonly clientMutationId?: string | null;
    readonly status?: TaskStatus | null;
};
export type useUpdateTaskListStatusFilterSettingMutationVariables = {
    readonly input: UpdateTaskListStatusFilterSettingInput;
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
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "UpdateTaskListStatusFilterSettingInput!",
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
                    "variableName": "input"
                }
            ],
            "concreteType": "UpdateTaskListStatusFilterSettingOutput",
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
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useUpdateTaskListStatusFilterSettingMutation",
            "id": null,
            "text": "mutation useUpdateTaskListStatusFilterSettingMutation(\n  $input: UpdateTaskListStatusFilterSettingInput!\n) {\n  updateTaskListStatusFilterSetting(input: $input) {\n    clientMutationId\n    status\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'fccb693d175f1bd65e1245e7b3c8dd41';
export default node;
