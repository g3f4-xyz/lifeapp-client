/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteTaskInput = {
    readonly id?: string | null;
    readonly clientMutationId?: string | null;
};
export type deleteTaskMutationVariables = {
    readonly input: DeleteTaskInput;
};
export type deleteTaskMutationResponse = {
    readonly deleteTask: {
        readonly clientMutationId: string | null;
        readonly deletedTaskId: string;
    };
};
export type deleteTaskMutation = {
    readonly response: deleteTaskMutationResponse;
    readonly variables: deleteTaskMutationVariables;
};



/*
mutation deleteTaskMutation(
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
            "name": "deleteTaskMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "deleteTaskMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "deleteTaskMutation",
            "id": null,
            "text": "mutation deleteTaskMutation(\n  $input: DeleteTaskInput!\n) {\n  deleteTask(input: $input) {\n    clientMutationId\n    deletedTaskId\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3bd030a0546fe2119c2e1e41d985a49e';
export default node;
