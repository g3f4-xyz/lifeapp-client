/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteTaskInput = {
    id?: string | null;
    clientMutationId?: string | null;
};
export type useDeleteTaskMutationVariables = {
    input: DeleteTaskInput;
};
export type useDeleteTaskMutationResponse = {
    readonly deleteTask: {
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
    deletedTaskId
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
            "concreteType": "DeleteTaskOutput",
            "kind": "LinkedField",
            "name": "deleteTask",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deletedTaskId",
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
            "name": "useDeleteTaskMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useDeleteTaskMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "045ef93c1245f9e1e68d8196f4cb2680",
            "id": null,
            "metadata": {},
            "name": "useDeleteTaskMutation",
            "operationKind": "mutation",
            "text": "mutation useDeleteTaskMutation(\n  $input: DeleteTaskInput!\n) {\n  deleteTask(input: $input) {\n    deletedTaskId\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'c5b42ef5f467aa1a0b7994a62b19f994';
export default node;
