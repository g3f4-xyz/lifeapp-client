/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteTaskInput = {
    readonly id?: string | null;
    readonly clientMutationId?: string | null;
};
export type useDeleteTaskMutationVariables = {
    readonly input: DeleteTaskInput;
};
export type useDeleteTaskMutationResponse = {
    readonly deleteTask: {
        readonly clientMutationId: string | null;
        readonly deletedTaskId: string;
    };
};
export type useDeleteTaskMutation = {
    readonly response: useDeleteTaskMutationResponse;
    readonly variables: useDeleteTaskMutationVariables;
};



/*
mutation useDeleteTaskMutation(
  $input: DeleteTaskInput!
) {
  deleteTask(input: $input) {
    clientMutationId
    deletedTaskId
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "DeleteTaskInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "deleteTask",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "DeleteTaskOutput",
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
                    "name": "deletedTaskId",
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
            "name": "useDeleteTaskMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useDeleteTaskMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useDeleteTaskMutation",
            "id": null,
            "text": "mutation useDeleteTaskMutation(\n  $input: DeleteTaskInput!\n) {\n  deleteTask(input: $input) {\n    clientMutationId\n    deletedTaskId\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b5a8d0bd4239cd9338ed9d75d61cfc1c';
export default node;
